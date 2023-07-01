const db = require("../models");
const ContactList = db.ContactListNew;
const User = db.User;
const YourContact = db.YourContact;
const { Op } = require("sequelize");


//Home page of application can only be acceessible when the user is looged in
module.exports.Home = async (req,res) =>{
    if(req.cookies.user_id){
        //finding the user
        let user = await User.findOne({where : {id :req.cookies.user_id}})
        return res.render("home", {
            //sening the user to frontend to display its actual values
            title: "Home",
            contacts : false,
            user : user 


        });
    }else{
        return res.redirect("/signin");
    }
}


//Creating new User  Account
module.exports.CreateAccount = async (req,res) => {
    //checking if password == confirmpassword
    if(req.body.password != req.body.Cpassword){
        return res.redirect("back");

    }
    // fnding user in database
    const user = await User.findOne({ where : {number : req.body.number}})
    if(user){
        //if user is already present then redirecting it to Signin page
        console.log("User Already Present")
        return res.redirect("back");
    }
    //else
    // creating new contact
    try{
        const newContact = {
            name  : req.body.name,
            email : req.body.email || "",
            number : req.body.number,
            status : true,
            ContactList : {}
        }
        // saving new user to the contact database
        await ContactList.create(newContact);
        console.log("Contact Created");
        

    }catch(err){
        // if any error occured
        console.log("Error in creating Contact ",err)
    }

    //creating new user
    const newUser = {
        name  : req.body.name,
        email : req.body.email || "",
        password : req.body.Cpassword,
        number : req.body.number,
        status : true
    }

    

    // console.log(newContact);

    try{
        //saving newly created user to database
        await User.create(newUser);
        return res.render("signIn");
    }catch(err){
        // if any error occured displaying that error in console
        console.log("Unable to create User");
        console.log("Internal Server Error ",err);
        return res.redirect("signup");

    }

}


// Creating Session
module.exports.CreateSession = async (req, res) => {
    console.log("Create Sesion");
    // saving value of number and password from req.body
    const usernumber = req.body.number;
    const userpassword = req.body.password;
    try{
        //find the user in database and checking if number and password is matched or not
        const user = await User.findOne({where : {number : usernumber , password : userpassword}});
        if(user){
            //if they match then redirect to home page
            console.log("User Found",user);
            res.cookie('user_id' , user.id);
            console.log("Cokkies Set")
            return res.redirect("/");

        }else{
            //if any error occured then back to signin page
            console.log("Invalid Credentials")
            return res.redirect("back");

        }

    }catch(err){
        console.log("Error in finding User " ,err);
        return res.redirect("back");
    }
}


//Updating the email
module.exports.UpdateEmail = async (req,res) =>{
    //checking if user is logged in or not
    if(req.cookies.user_id){
        //finding user in database
        const user = await User.findOne({ where : {id : req.cookies.user_id}});
        // updating the email field of the user
        user.email = req.body.email;
        await user.save() ;
        return res.redirect('back')
    }else{
        return res.redirect("/");
    }

}


// User contacts saved in user profile  
module.exports.YourContact = async (req, res) => {
    if (req.cookies.user_id) {
      const userId = parseInt(req.cookies.user_id);
      try {
        //finding the user in database
        const user = await User.findOne({ where: { id: userId } });
        console.log(user.number);
        const userNumber = user.number;
  
        const contactList = await ContactList.findOne({ where: { number: userNumber } });
  
        const yourContacts = await YourContact.findAll({ where: { userId: contactList.id } });

        const Allcontacts = await ContactList.findAll();

  
        console.log(yourContacts);
        console.log(Allcontacts);

        //redirecting it to the "YourContacts"
        return res.render("YourContacts", {
          contacts: yourContacts,
          Allcontacts : Allcontacts,
          user : contactList
        });
      } catch (err) {
        //If any error occured then printing that error in console and redirecting it back
        console.log(`No Such Id Exists ${userId}`);
        return res.redirect('back');
      }
    } else {
      return res.redirect("/signin");
    }
  };


  //User can add new number in his/her contactlist and will automatically added to the global database
  module.exports.AddToContact = async (req, res) => {
    //checking if user is present or not
    if (req.cookies.user_id) {
      try {
        const newContact = {
          name: req.body.name,
          number: req.body.number,
          status : false
        };
        //finding the userin database
        const user = await User.findOne({ where: { id: req.cookies.user_id } });
        const userNumber = user.number;
  
        const contactList = await ContactList.findOne({ where: { number: userNumber } });
  
        const createdContact = await ContactList.create(newContact);
  
        //linking between user and contact saved in user contact list
        const newYourContact = {
          userId: contactList.id,
          contactListId: createdContact.id
        };
  
        await YourContact.create(newYourContact);
  
        console.log("New Contact Created:", newContact);
        return res.redirect("/yourcontact");
      } catch (err) {
        //if any error occured then printing in console and redirecting back
        console.log("Error in adding the contact:", err);
        return res.redirect("back");
      }
    }
  };
  

//Add spam to any contact 
module.exports.addspam = async (req,res) => {
    let id = req.params.id;
    const UserId = req.cookies.user_id;
    let user = await ContactList.findOne({where : {id : id}});
    user.spam = user.spam +1 ;
    await user.save();
    user = await User.findOne({ where: { id: UserId } });
    console.log(user.number);
    const userNumber = user.number;

    const contactList = await ContactList.findOne({ where: { number: userNumber } });

    await YourContact.destroy({ where: { userId: contactList.id , contactListId :  id} });
    res.redirect("back")
    
}


//logout
module.exports.DestroySession = async (req,res) =>{
    res.clearCookie("user_id");
    return res.redirect('/signup');
    
}


//user can add contact from globaldatase to his/her own contact list
module.exports.AddToYourContacts = async (req, res) => {
    if(req.cookies.user_id){

    try {
        
        const userId = req.cookies.user_id;
        let contactId = req.params.id;
        //finding the user in database
        const UNumber = await User.findOne({where : {id : userId}})
        const user = await ContactList.findOne({where : {number : UNumber.number}});
        const check = await YourContact.findOne({where : {userId : user.id ,contactListId : contactId}})
        if(!check){
        const Ucontact = {
            userId : user.id,
            contactListId : contactId
        }
        await YourContact.create(Ucontact);
        }


        
        return res.redirect('/');
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json({ message: 'An error occurred while adding the contact to your contacts.' });
    }
    }
  }
  



//Search Contact By Name
module.exports.SearchByName = async (req,res) => {
    let contactName = req.body.name;
    try{
        const CList = await ContactList.findAll({where : {name : {[Op.like] : `%${contactName}%`  }}});

        // res.status(200).json(CList);
        return res.render("home" , {
            contacts : CList
        })

    }catch(err){
        console.log("Error in finding the Contact ", err);     
    }
}

//Search Contact By Number
module.exports.SearchByNumber = async (req,res)=> {
    let contactNum = req.body.number;
    try{
        let CList = await ContactList.findAll({where : {number : contactNum , status : true}});
        console.log(CList);
        if(CList.length === 0){
            CList = await ContactList.findAll({where : {number : contactNum}});
        }
        // res.status(200).json(CList);
        return res.render("home" , {
            contacts : CList
        })

    }catch(err){
        console.log("Error in finding the Contact ", err);     
    }

} 

//signin
module.exports.signin = async (req,res) =>{
    if(req.cookies.user_id){
        return res.redirect("/")
    
    }else{
        return res.render('signIn');
    }

}


//signup
module.exports.signup = (req,res) =>{
    if(req.cookies.user_id){
        return res.redirect("/")
    
    }else{
        return res.render('signup');
    }
    
}