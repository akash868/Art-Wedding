const jwt = require('jsonwebtoken');
 
const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Invalid token' });
        }
 
        const token = authHeader.replace('Bearer ', '');
 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Ensure req.user contains only the user data
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};
 
module.exports = authMiddleware;