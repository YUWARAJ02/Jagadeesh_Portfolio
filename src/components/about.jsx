import React from 'react';
import AboutItems from './aboutItems';

const eduData = [
    {
        level: '10th',
        year: 2017,
        name: 'VELAMMAL MATRIC HIGHER SECONDARY SCHOOL',
        grade: '84%'
    },
    {
        level: '12th',
        year: 2019,
        name: 'VELAMMAL MATRIC HIGHER SECONDARY SCHOOL',
        grade: '65%'
    },
    {
        level: 'B.E. - Electronics and Communication Engineering',
        year: 2023,
        name: 'VEL TECH MULTI TECH',
        grade: '7.88 CGPA'
    },
    {
        level: 'M.E. - Embedded System Technologies',
        year: 2025,
        name: 'RAJALAKSHMI ENGINEERING COLLEGE',
        grade: '8.03 CGPA'
    }
];
const abt = [
    {
        title: 'Skills',
        my: [
            'Programming languages – Python, C, C++',
            'Model Based Development – Model In Loop, Software In Loop, Processor In Loop, Hardware in Loop.',
            'Hands on experience with Microcontrollers and Single board computer: Arduino, ESP 32, STM32, Texas Instruments, Raspberry Pi.',
            'Embedded Networking - I2C, UART, SPI, CAN, MODBUS, LIN, FLEXRATE, MQTT, ZIGBET, LoRaWAN, BLE',
            'Real Time Operating System (RTOS) - Free RTOS, ZETHYR',
            'FPGA development using VHDL',
            'Internet of Things',
            'Data Analytics, Machine Learning and AIOT',
            'Software Tools: MATLAB / Simulink']
    },
    {
        title: 'Software Tools',
        my: ['MATLAB / Simulink', 'Arduino IDE', 'STM32 CUBE IDE', 'KEIL', 'Code Composer Studio']
    },
    {
        title: 'Publications',
        my: [
            `Jagadeesh. V, "Enhancing Bank Locker Security through Multi-Layered Authentication and IoT
             Integration", 2024 IEEE Recent Advances in Intelligent Computational Systems (RAICS),
             DIO: 10.1109/RAICS61201.2024.10689894, 2024.`,
            `Jagadeesh. V, "Cardiovascular Disease Prediction Using Extreme Gradient Boosting Algorithm",
             IEEE 2023 second International Conference on Advances in Computational Intelligence and
             Communication (ICACIC), DIO:10.1109/ICACIC59454.2023.10435219, 2023.`]
    },
    {
        title:"Certifications",
        my: [
            'Embedded Systems – NSIC',
            'Data Science virtual internship (3 months) - Shiash Info Solutions Pvt Ltd',
            'Business Analytics - Intershala',
            'Digital analytics and Regression – IBM',
            'R Programming For Data Analytics'
        ]
    },
    {
        title:"Hobbies",
        my: [
            'Hands on experiments with Microcontrollers.',
            'Doing projects and writing research papers.'
        ]
    }
    ];

const About = () => {
    return (

        <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>My Details</h1>
            <h3 className='text-xl font-bold mt-8 mb-2'>Educational Details</h3>
            <div className='divide-y divide-gray-200'>
                {eduData.map((item, index) => {
                    return (
                        <AboutItems
                            key={index}
                            level={item.level}
                            year={item.year}
                            title={item.name}
                            grade={item.grade}
                        />)

                })}
            </div>

            {abt.map((skill, index) => (
                <div className="py-6" key={index}>
                    <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    <ul className="space-y-2">
                        {skill.my.map((item, idx) => (
                            <li key={idx} className="relative flex items-center">
                                <div className="w-4 h-4 mr-2 rounded-full bg-[#001b5e]"></div>
                                <span className="text-lg text-gray-700">{item}</span>
                                <div className="absolute left-0 top-0 w-0 h-full bg-[#001b5e] rounded-full animate-pulse"></div>

                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default About;
