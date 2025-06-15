## Library App

### Installation

Ensure you have Node.js installed, then run:

```bash
    npm install jsonwebtoken
```

![SS07](https://github.com/user-attachments/assets/926e2652-b9ab-489e-967b-48789d5f4eb0)

```bash
   npm install bcrypt
```


![SS08](https://github.com/user-attachments/assets/eb8b5c33-062b-4d51-84b3-27db177cfb9e)


### User Registration

Schema Definition (models/User.js)

```javascript
   const mongoose = require('mongoose');

   const UserSchema = new mongoose.Schema({
     username: { type: String, required: true, unique:true },
     email: { type: String, required: true, unique:true },
     password: { type: String, required: true }
   }, { timestamps: true });

   module.exports = mongoose.model('users', UserSchema);

```

Route for Registration (routes/userRoute.js)

```javascript
router.post('/register',async (req,res)=>{
    try{
        let {username,email,password} = req.body
        if(!username || !email || !password){
            res.status(400).send("Please provide the required fields!")
        }
        if(await User.findOne({username})){
            res.status(409).send("Username already available")
        }
            const salt=await bcrypt.genSalt()
            password=await bcrypt.hash(password,salt)  //Hashing the password (not the pwd in plain text)
            const results = await User.create({username,email,password})
            res.status(200).json(results);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 
```

New User Registration

![SS1](https://github.com/user-attachments/assets/2412193e-23d1-4bd5-822c-68f76618323a)

![SS2](https://github.com/user-attachments/assets/6180431b-b15e-4157-81e9-caa9f7ad50d8)


Already Registered User




### User Login

Login Route (routes/userRoute.js)

```
router.post('/login',async (req,res)=>{
    try{
        let {username,password} = req.body
        if(!username || !password){
            res.status(400).send("Please provide the required fields!")
        }
        //check username
        const user = await User.findOne({username})
        if(!user){
            return res.status(409).send("Please check your username and password")
        }

        //check password
        const passMatch = await bcrypt.compare(password,user.password)
        if(!passMatch){
            return res.status(409).send("Please check your username and password")
        }

        //create token
        const payload={ID:user._id,NAME:user.username}
        //encrypeion
        const token=jwt.sign(payload,secretkey)
        //return res.status(200).json({token,payload})
        return res.status(200).json(token);
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server Error ! ")
    }
}) 
```

User Login

![SS5](https://github.com/user-attachments/assets/8a887706-a67f-48ce-89ab-4c60b4287ef2)

User Login with Payload

![SS 6](https://github.com/user-attachments/assets/8bdbaae4-450e-42ac-8122-15cab4de8bf7)

Incorrect Login

![SS4](https://github.com/user-attachments/assets/12ef9ce0-4ed3-4484-96a4-33093734b782)


