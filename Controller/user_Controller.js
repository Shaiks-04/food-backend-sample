const user=require('../Model/userStructure')
const saltround=10
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const secretKey='shaik'

const signup=async (req,res)=>{
    const {Email,password}=req.body
    const existinguser=await user.findOne({Email:Email})

    if(existinguser){
        return res.send({msg:'user already exists'})
    }
    else{
        console.log('Password:', password);
        const hashpw=bcrypt.hashSync(password,saltround)
        
        const tempobj=await user({
                Email:Email,
                password:hashpw,
        })
        const result=await tempobj.save();
        const token=jwt.sign({userid: result._id,Email:Email},secretKey)
        return res.send({msg:"sucessful!!",token:token,Email:Email})
    }
}

const login = async (req, res) => {
    const { Email, password } = req.body;
    const userLogin = await user.findOne({ Email: Email });

    if (userLogin) {
        const valid = bcrypt.compareSync(password, userLogin.password); 

        if (valid) {
            const token = jwt.sign({ userid: userLogin._id ,Email:Email }, secretKey);
            return res.send({ msg: 'Successful!!', token: token,Email:Email });
        } 
        else {
            return res.send({ msg: 'Incorrect password' });
        }
    }
    return res.send({ msg: 'User is not registered' });
};

module.exports={signup,login}
