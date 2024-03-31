const User = require('../models/register');

exports.resetPassword = async (req, res) => {
    const { email,oldPassword, newPassword } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user's password
        if(user.password==oldPassword)
        {
            user.password = newPassword;
<<<<<<< HEAD
            user.checkreset=true;  
            await user.save();
=======
        await user.save();
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344

        res.status(200).json({ message: 'Password reset successfully' });
        }
        else{
            res.status(500).json({ message: 'Password didnot matched' });
        }

        
    } catch (error) {
        console.error('Error resetting password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
