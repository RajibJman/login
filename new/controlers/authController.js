const jwt = require('jsonwebtoken');
const User = require('../models/register');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
        
        if(user.role=='admin')
        res.status(210).json({ message: 'admin', token });
        else if(user.role=='user')
        res.status(220).json({ message: 'user', token });
        else
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
