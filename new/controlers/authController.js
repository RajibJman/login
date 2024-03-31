const jwt = require('jsonwebtoken');
const User = require('../models/register');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
<<<<<<< HEAD
        const user = await User.findOne({email});
        console.log(user)
=======
        const user = await User.findOne({ email });
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
        
        if(user.role=='admin')
        res.status(210).json({ message: 'admin', token });
        else if(user.role=='user')
<<<<<<< HEAD
        {
            if(user.checkreset==false)
            {

                res.status(220).json({ message: 'user need to reset', token });
            }
            else
            {
                
                res.status(230).json({ message: 'user', token });
            }
            

        }
        else
        res.status(200).json({ message: 'Login successful', user });
=======
        res.status(220).json({ message: 'user', token });
        else
        res.status(200).json({ message: 'Login successful', token });
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
<<<<<<< HEAD

exports.allData = async (req, res) => {

    try {
        const user = await User.find({});
        // console.log(user)
        res.status(200).json({user});
            

        }catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
=======
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344
