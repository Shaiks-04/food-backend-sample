const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Save = require("../Model/saveStructure");

const insert = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, "shaik");
    const { userid } = decodedToken;
    const { recipeid,img,source,label,yield} = req.params;

  try {
    const existingUser = await Save.findOne({ userid });

    if (!existingUser) {
        const newUser = new Save({
          userid,
          Bookmark: [{ recipeid, img, source, label,yield }],
        });
        await newUser.save();
        res.status(201).json({ message: "New user created with data" });
    } else {
        existingUser.Bookmark.push({ recipeid,img,source,label,yield });
        await existingUser.save();
        res.status(201).json({ message: "Data added to existing user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while saving the data" });
  }
};

const fetch=async (req,res)=>{
    const token = req.headers.authorization.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, "shaik");

        const userid = decodedToken.userid;

        const user = await Save.findOne({ userid });

        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching user data" });
    }
}

module.exports = {insert,fetch};
