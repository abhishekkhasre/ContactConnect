const db = require("../models");
const ContactList = db.ContactListNew;
const { Op } = require("sequelize");
const User = db.User;

module.exports.profile = async (req,res) => {
    if(req.cookies.user_id){
        try{
        const userId= req.cookies.user_id ;
        const user = await User.findOne({where : {id : userId}});
        return res.render("userprofile",{
            user : user
        })
        }catch(err){
            console.log("Error in finding user profile ",err);
            return res.redirect('back');
        }

    }else{
        return res.redirect("/signin");
    }

}

module.exports.populateDataBase = async (req,res) =>{

    let c1 = {
      name: "John",
      number: 987654987,
      status: false
    };

    let c2 = {
      name: "Aditya",
      number: 9887654987,
      status: false
    };
    
    let c3 = {
      name: "Alice",
      number: 1234567890,
      status: false
    };
    
    let c4 = {
      name: "Bob",
      number: 9876543210,
      status: false
    };
    
    let c5 = {
      name: "Catherine",
      number: 8765432109,
      status: false
    };
    
    let c6 = {
      name: "Daniel",
      number: 1029384756,
      status: false
    };
    
    let c7 = {
      name: "Emily",
      number: 7654321098,
      status: false
    };
    
    let c8 = {
      name: "Franklin",
      number: 987654321,
      status: false
    };
    
    let c9 = {
      name: "Grace",
      number: 1098765432,
      status: false
    };
    
    let c10 = {
      name: "Henry",
      number: 2109876543,
      status: false
    };
    
    let c11 = {
      name: "Isabella",
      number: 9876543211,
      status: false
    };
    
    let c12 = {
      name: "Jacob",
      number: 8765432110,
      status: false
    };
    
    let c13 = {
      name: "Katherine",
      number: 7654321109,
      status: false
    };
    
    let c14 = {
      name: "Liam",
      number: 6543210987,
      status: false
    };
    
    let c15 = {
      name: "Mia",
      number: 5432109876,
      status: false
    };
    
    let c16 = {
      name: "Noah",
      number: 4321098765,
      status: false
    };
    
    let c17 = {
      name: "Olivia",
      number: 3210987654,
      status: false
    };
    
    let c18 = {
      name: "Patrick",
      number: 2109876543,
      status: false
    };
    
    let c19 = {
      name: "Quinn",
      number: 1098765432,
      status: false
    };
    
    let c20 = {
      name: "Ryan",
      number: 9876543210,
      status: false
    };
    
    let c21 = {
      name: "Sophia",
      number: 8765432109,
      status: false
    };
    
    let c22 = {
      name: "Thomas",
      number: 7654321098,
      status: false
    };
    
    let c23 = {
      name: "Uma",
      number: 6543210987,
      status: false
    };
    
    let c24 = {
      name: "Victor",
      number: 5432109876,
      status: false
    };
    
    let c25 = {
      name: "Wendy",
      number: 4321098765,
      status: false
    };
    
    let c26 = {
      name: "Xavier",
      number: 3210987654,
      status: false
    };
    
    let c27 = {
      name: "Yara",
      number: 2109876543,
      status: false
    };
    
    let c28 = {
      name: "Zane",
      number: 1098765432,
      status: false
    };
    
    let c29 = {
      name: "Alexa",
      number: 9876543211,
      status: false
    };
    
    let c30 = {
      name: "Benjamin",
      number: 8765432110,
      status: false
    };
    
    let c31 = {
      name: "Chloe",
      number: 7654321109,
      status: false
    };
    
    let c32 = {
      name: "David",
      number: 6543210987,
      status: false
    };
    
    let c33 = {
      name: "Emma",
      number: 5432109876,
      status: false
    };
    
    let c34 = {
      name: "Finn",
      number: 4321098765,
      status: false
    };
    
    let c35 = {
      name: "Grace",
      number: 3210987654,
      status: false
    };
    
    let c36 = {
      name: "Henry",
      number: 2109876543,
      status: false
    };
    
    let c37 = {
      name: "Isabella",
      number: 1098765432,
      status: false
    };
    
    let c38 = {
      name: "Jacob",
      number: 9876543210,
      status: false
    };
    
    let c39 = {
      name: "Katherine",
      number: 8765432109,
      status: false
    };
    
    let c40 = {
      name: "Liam",
      number: 7654321098,
      status: false
    };
    
    let c41 = {
      name: "Mia",
      number: 6543210987,
      status: false
    };
    
    let c42 = {
      name: "Noah",
      number: 5432109876,
      status: false
    };
    
    let c43 = {
      name: "Olivia",
      number: 4321098765,
      status: false
    };
    
    let c44 = {
      name: "Patrick",
      number: 3210987654,
      status: false
    };
    
    let c45 = {
      name: "Quinn",
      number: 2109876543,
      status: false
    };
    
    let c46 = {
      name: "Ryan",
      number: 1098765432,
      status: false
    };
    
    let c47 = {
      name: "Sophia",
      number: 9876543211,
      status: false
    };
    
    let c48 = {
      name: "Thomas",
      number: 8765432110,
      status: false
    };
    
    let c49 = {
      name: "Uma",
      number: 7654321109,
      status: false
    };
    
    let c50 = {
      name: "Victor",
      number: 6543210987,
      status: false
    };
    
    await ContactList.create(c1);
    await ContactList.create(c2);
    await ContactList.create(c3);
    await ContactList.create(c4);
    await ContactList.create(c5);
    await ContactList.create(c6);
    await ContactList.create(c7);
    await ContactList.create(c8);
    await ContactList.create(c9);
    await ContactList.create(c10);
    await ContactList.create(c11);
    await ContactList.create(c12);
    await ContactList.create(c13);
    await ContactList.create(c14);
    await ContactList.create(c15);
    await ContactList.create(c16);
    await ContactList.create(c17);
    await ContactList.create(c18);
    await ContactList.create(c19);
    await ContactList.create(c20);
    await ContactList.create(c21);
    await ContactList.create(c22);
    await ContactList.create(c23);
    await ContactList.create(c24);
    await ContactList.create(c25);
    await ContactList.create(c26);
    await ContactList.create(c27);
    await ContactList.create(c28);
    await ContactList.create(c29);
    await ContactList.create(c30);
    await ContactList.create(c31);
    await ContactList.create(c32);
    await ContactList.create(c33);
    await ContactList.create(c34);
    await ContactList.create(c35);
    await ContactList.create(c36);
    await ContactList.create(c37);
    await ContactList.create(c38);
    await ContactList.create(c39);
    await ContactList.create(c40);
    await ContactList.create(c41);
    await ContactList.create(c42);
    await ContactList.create(c43);
    await ContactList.create(c44);
    await ContactList.create(c45);
    await ContactList.create(c46);
    await ContactList.create(c47);
    await ContactList.create(c48);
    await ContactList.create(c49);
    await ContactList.create(c50);

    return res.redirect("/signup");
    

}





// module.exports.UserHome = async (req,res)=>{
//     res.render("home" , {
//         message : "User is logged in"
//     })
// }

// //Show All contact 
// module.exports.showContact = async (req, res) => {
//     try {
//       const CL = await ContactList.findAll();
//       res.status(200).json(CL);
//     } catch (err) {
//       console.log("Error in ContactList: ", err);
//       res.status(500).json({ error: "Internal Error" });
//     }
//   };
  



// // Create and Save a new contact in ContactList
// module.exports.CreateContact = async (req,res)=>{
//     const newContact = {
//         name  : req.body.name || "Anonymous",
//         number : req.body.number,
//         email : req.body.email || "",
//         status : req.body.status || false,
//         spam : req.body.spam || 0
//     };
//     try{
//         const contact = await ContactList.create(newContact);
//         console.log("New contact created successfully!");
//         res.status(200).json(contact);
//     }catch(err){
//         console.log(`Error: ${err}`);
//     }
// }

// //Search Contact by Number
// module.exports.SearchContactByNumber = async (req,res)=> {
//     let contactNum = req.body.number;
//     try{
//         const CList = await ContactList.findAll({where : {number : contactNum , status : true}});
//         if(!CList){
//             const CList = await ContactList.findAll({where : {number : contactNum}});
//         }

//         res.status(200).json(CList);

//     }catch(err){
//         console.log("Error in finding the Contact ", err);     
//     }

// } 

// //Search Contact By Name
// module.exports.SearchContactByName = async (req,res) => {
//     let contactName = req.body.name;
//     try{
//         const CList = await ContactList.findAll({where : {name : {[Op.like] : `%${contactName}%`  }}});

//         res.status(200).json(CList);

//     }catch(err){
//         console.log("Error in finding the Contact ", err);     
//     }
// }


// //Mark Contact As Spam
// module.exports.MarkContactSpam = async (req,res) => {
//     let contactName = req.body.name;
//     let contactNumber = req.body.number;
//     try{
//         const contact = await ContactList.findAll({spam  : db.sequelize.literal("spam + 1")},{where : {name : contactName , number : contactNumber}});
//         res.status(200).json(contact);

//     }catch(err){
//         console.log("Error in Marking Contact as Spam ",err);
//     }
// }

