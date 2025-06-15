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

```
   const mongoose = require('mongoose');

   const UserSchema = new mongoose.Schema({
     username: { type: String, required: true, unique:true },
     email: { type: String, required: true, unique:true },
     password: { type: String, required: true }
   }, { timestamps: true });

   module.exports = mongoose.model('users', UserSchema);

```

Route for Registration (routes/userRoute.js)


### User Login

Login Route (routes/userRoute.js)


