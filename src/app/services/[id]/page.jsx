import React from 'react';




const ServicesDetails = ({ params }) => {
    const { id } = params
    const data = [
        {
            "_id": "1",
            "name": "Web Design",
            "image": "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
            "description": "Professional and responsive web design for modern businesses."
        },
        {
            "_id": "2",
            "name": "Mobile App Development",
            "image": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
            "description": "High-performance mobile applications for Android and iOS."
        },
        {
            "_id": "3",
            "name": "SEO Optimization",
            "image": "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg",
            "description": "Boost your website ranking with expert SEO strategies."
        },
        {
            "_id": "4",
            "name": "Graphic Design",
            "image": "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
            "description": "Creative and engaging graphics for your brand identity."
        },
        {
            "_id": "5",
            "name": "Social Media Marketing",
            "image": "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg",
            "description": "Expand your reach with powerful social media campaigns."
        },
        {
            "_id": "6",
            "name": "Content Writing",
            "image": "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg",
            "description": "High-quality content writing to engage your audience."
        },
        {
            "_id": "7",
            "name": "Cloud Hosting",
            "image": "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg",
            "description": "Reliable and secure cloud hosting for your applications."
        },
        {
            "_id": "8",
            "name": "UI/UX Design",
            "image": "https://images.pexels.com/photos/5380648/pexels-photo-5380648.jpeg",
            "description": "User-friendly interfaces designed for better experiences."
        },
        {
            "_id": "9",
            "name": "Digital Advertising",
            "image": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
            "description": "Targeted ads to reach your ideal customer effectively."
        },
        {
            "_id": "10",
            "name": "Video Editing",
            "image": "https://images.pexels.com/photos/8553936/pexels-photo-8553936.jpeg",
            "description": "Professional video editing for business and entertainment."
        },
        {
            "_id": "11",
            "name": "Cybersecurity Consulting",
            "image": "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg",
            "description": "Protect your systems with expert cybersecurity advice."
        },
        {
            "_id": "12",
            "name": "E-commerce Development",
            "image": "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
            "description": "Custom online store solutions for your business."
        },
        {
            "_id": "13",
            "name": "Database Management",
            "image": "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
            "description": "Efficient and secure database solutions for all scales."
        },
        {
            "_id": "14",
            "name": "Branding Services",
            "image": "https://images.pexels.com/photos/4353614/pexels-photo-4353614.jpeg",
            "description": "Build a strong brand presence with our strategic services."
        },
        {
            "_id": "15",
            "name": "Photography",
            "image": "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg",
            "description": "Capture stunning visuals for personal or commercial use."
        },
        {
            "_id": "16",
            "name": "Email Marketing",
            "image": "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
            "description": "Drive engagement through personalized email campaigns."
        },
        {
            "_id": "17",
            "name": "IT Support",
            "image": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
            "description": "Fast and reliable IT solutions for your tech issues."
        },
        {
            "_id": "18",
            "name": "Machine Learning Solutions",
            "image": "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
            "description": "Intelligent systems powered by machine learning."
        },
        {
            "_id": "19",
            "name": "Translation Services",
            "image": "https://images.pexels.com/photos/6457570/pexels-photo-6457570.jpeg",
            "description": "Accurate translation services in over 50 languages."
        },
        {
            "_id": "20",
            "name": "Virtual Assistant",
            "image": "https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg",
            "description": "Affordable virtual assistants for daily business tasks."
        }
    ]

    const service = data.find((d) => d._id === id);

    if (!service) {
        return (
            <div className="text-center py-10">
                <h2 className="text-xl font-bold text-red-600">Service Not Found</h2>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h1 className="text-3xl font-bold text-primary mb-2">{service.name}</h1>
            <p className="text-gray-700">{service.description}</p>
        </div>
    );
};

export default ServicesDetails;