const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createUser = async (req, res) => {
    try {
        const { userName, password } = req.body
        const checkUser = await User.findOne({userName})
        console.log("checkUser", checkUser)
        if (checkUser) {
            return res.status(500).json({error: {message: "Пользователь с таким именем уже сущетвует."}})
        }
        if (password.trim().length < 8) {
            return res.status(500).json({error: {message: "Слишком короткий пароль."}})
        }
        const hashed = await bcrypt.hash(password, 10)
		const user = new User({ userName, password: hashed })
		await user.save()
        return res.status(200).json({})
    } catch (error) {
        console.log("error", error) 
        return res.status(500).json({error})       
    }
}

const loginUser = async (req, res) => {
    try {
        const { userName, password } = req.body
        const users = await User.find()
        console.log("users", users)
        const user = await User.findOne({ userName })
        console.log("user", user)
        if (!user) {
            res.status(401).json({
                error: {
                    title: "Unauthorized",
                    detail: "Authentication credentials invalid"
                }
            })
        }
        const passwordValidated = await bcrypt.compare(password, user.password)
        console.log("passwordValidated", passwordValidated)
        if (!passwordValidated) {
			res.status(401).json({
                error: {
                    title: "Unauthorized",
                    detail: "Authentication credentials invalid"
                }
            })
		}
        const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET)
        res.cookie("token", token, {
            sameSite: true,
            maxAge: 1209600000,
            secure: process.env.NODE_ENV === "production"
          }).json({
            title: "Successfully"
          });
       
    } catch (error) {
        console.log("error", error) 
        return res.status(500).json({
            error: {
                title: "Unauthorized",
                detail: "Authentication credentials invalid"
            }
        })
    }
}

const checkUser = async (req, res) => {
    res.status(200).json({
        title: "Successfully"
    })
}

const logoutUser = async (req, res) => {
    res.clearCookie("token")
    res.status(200).json({
        title: "Successfully"
    })
}

const getUsers = async(req, res) => {
    try {
        const { size = 25, page = 1 } = req.body
        const toSkip = page*size
        const response = await User.find()
        const users = response.map(i => {
            return {
                key: i._id,
                userName: i.userName
            }
        })
        res.status(200).json({
            users
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}
const deleteUser = async (req, res) => {
    try {
        const { id } = req.body
        console.log("req.body", id)
        await User.deleteOne({ _id: id })
        return res.status(200).json({ massage: "Successfully" })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json(error)
    }
}

module.exports = {
    createUser,    
    loginUser,
    checkUser,
    logoutUser,
    getUsers,
    deleteUser
}