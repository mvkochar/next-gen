type TService = {
    id: number
    icon: string
    title: string
    description: string
    price: string
}

const ServicesList:TService[] = [
    {
        id: 1,
        icon: "/images/services1.png",
        title: "Web Design",
        description: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
        price: "1,500"
    },

    {
        id: 2,
        icon: "/images/services2.png",
        title: "Mobile App Development",
        description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
        price: "2,500"
    },
   
    {
        id: 3,
        icon: "/images/services3.png",
        title: "Web Development",
        description: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
        price: "1,800"
    },

    {
        id: 4,
        icon: "/images/services4.png",
        title: "Digital Marketing",
        description: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility.",
        price: "1,200"
    }
]

export default ServicesList