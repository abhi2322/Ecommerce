import bcrypt from 'bcryptjs';

const data ={
    users:[
        {name:'Abhishek',
        email:'abhishekjamwal34@gmail.com',
        password:bcrypt.hashSync('1234',8),
        isAdmin:true,
        },
        {name:'Tarun',
        email:'tarunsingh021@gmail.com',
        password:bcrypt.hashSync('qwerty',8),
        isAdmin:false,
        }

    ],
    products: [
        {
            name:'Shirt',
            category:'Shirts',
            image:'/image/p2.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Italian Shirt',
            category:'Shirts',
            image:'/image/p1.jpg',
            price:120,
            countInStock:0,
            brand:'Nike',
            rating:3.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'french Shirt',
            category:'Shirts',
            image:'/image/p2.jpg',
            price:120,
            countInStock:5,
            brand:'Nike',
            rating:5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'indian Shirt',
            category:'Shirts',
            image:'/image/p2.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4,
            numReviews:1,
            description:'high quality product'
        },
        {
            name:'American Shirt',
            category:'Shirts',
            image:'/image/p2.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:1,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Japenesee Shirt',
            category:'Shirts',
            image:'/image/p2.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:1.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Europe Shirt',
            category:'Shirts',
            image:'/image/p2.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Dx Shirt',
            category:'Shirts',
            image:'/image/p2.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
            name:'Nike Shirt',
            category:'Shirts',
            image:'/image/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        }
    ]
}

export default data;