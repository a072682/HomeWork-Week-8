import { createSlice } from '@reduxjs/toolkit';



const dataSlice = createSlice({
  name: 'data', //名稱
  initialState: { //初始數值
    defaultClassData:[
                        {
                            id: "cat-程式",
                            label: "程式",
                            children: [
                            {
                            id: "sub-程式入門",
                            label: "程式入門",
                            children: [
                            {
                            id: "course-程式入門-1",
                            title: "程式入門主題完整學習課程",
                            time: "優惠倒數 11 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            img: `${import.meta.env.BASE_URL}image/course-9.png`,
                            title: "程式入門主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                            name: "六角學院",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 11 天",
                            progress: "52%"
                            },
                            classData: {
                            title: "程式入門主題完整學習課程",
                            category: "程式入門",
                            caption: "這門課將帶你深入了解程式入門的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握程式入門的知識與應用能力。",
                            tag: [
                            "程式入門",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "六角學院",
                            teacherImg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                            teacherCaption: "程式入門 領域專業講師",
                            teacherCaption02: "專注於 程式入門 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "程式入門 專業課程推薦",
                            teacherIntroduce: "六角學院 致力於推廣 程式入門 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "程式入門主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握程式入門的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "程式入門進階應用技巧",
                            classContent: "進一步掌握 程式入門 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-程式入門-2",
                            title: "程式入門技能實務與應用",
                            time: "優惠倒數 5 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            img: `${import.meta.env.BASE_URL}image/course-1.png`,
                            title: "程式入門技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                            name: "Mr.Robert",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 5 天",
                            progress: "55%"
                            },
                            classData: {
                            title: "程式入門技能實務與應用",
                            category: "程式入門",
                            caption: "這門課將帶你深入了解程式入門的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握程式入門的知識與應用能力。",
                            tag: [
                            "程式入門",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "Mr.Robert",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                            teacherCaption: "程式入門 領域專業講師",
                            teacherCaption02: "專注於 程式入門 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "程式入門 專業課程推薦",
                            teacherIntroduce: "Mr.Robert 致力於推廣 程式入門 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "程式入門主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握程式入門的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "程式入門進階應用技巧",
                            classContent: "進一步掌握 程式入門 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-網頁前端",
                            label: "網頁前端",
                            children: [
                            {
                            id: "course-網頁前端-1",
                            title: "網頁前端主題完整學習課程",
                            time: "優惠倒數 6 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            img: `${import.meta.env.BASE_URL}image/course-2.png`,
                            title: "網頁前端主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                            name: "Kelly Beck",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 6 天",
                            progress: "54%"
                            },
                            classData: {
                            title: "網頁前端主題完整學習課程",
                            category: "網頁前端",
                            caption: "這門課將帶你深入了解網頁前端的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握網頁前端的知識與應用能力。",
                            tag: [
                            "網頁前端",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "Kelly Beck",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                            teacherCaption: "網頁前端 領域專業講師",
                            teacherCaption02: "專注於 網頁前端 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "網頁前端 專業課程推薦",
                            teacherIntroduce: "Kelly Beck 致力於推廣 網頁前端 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "網頁前端主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握網頁前端的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "網頁前端進階應用技巧",
                            classContent: "進一步掌握 網頁前端 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-網頁前端-2",
                            title: "網頁前端技能實務與應用",
                            time: "優惠倒數 11 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            img: `${import.meta.env.BASE_URL}image/course-3.png`,
                            title: "網頁前端技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                            name: "K.Lee",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 11 天",
                            progress: "71%"
                            },
                            classData: {
                            title: "網頁前端技能實務與應用",
                            category: "網頁前端",
                            caption: "這門課將帶你深入了解網頁前端的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握網頁前端的知識與應用能力。",
                            tag: [
                            "網頁前端",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "K.Lee",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                            teacherCaption: "網頁前端 領域專業講師",
                            teacherCaption02: "專注於 網頁前端 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "網頁前端 專業課程推薦",
                            teacherIntroduce: "K.Lee 致力於推廣 網頁前端 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "網頁前端主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握網頁前端的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "網頁前端進階應用技巧",
                            classContent: "進一步掌握 網頁前端 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-網頁後端",
                            label: "網頁後端",
                            children: [
                            {
                            id: "course-網頁後端-1",
                            title: "網頁後端主題完整學習課程",
                            time: "優惠倒數 10 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            img: `${import.meta.env.BASE_URL}image/course-4.png`,
                            title: "網頁後端主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-4.png`,
                            name: "Devon Lane",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 10 天",
                            progress: "71%"
                            },
                            classData: {
                            title: "網頁後端主題完整學習課程",
                            category: "網頁後端",
                            caption: "這門課將帶你深入了解網頁後端的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握網頁後端的知識與應用能力。",
                            tag: [
                            "網頁後端",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "Devon Lane",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-4.png`,
                            teacherCaption: "網頁後端 領域專業講師",
                            teacherCaption02: "專注於 網頁後端 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "網頁後端 專業課程推薦",
                            teacherIntroduce: "Devon Lane 致力於推廣 網頁後端 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "網頁後端主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握網頁後端的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "網頁後端進階應用技巧",
                            classContent: "進一步掌握 網頁後端 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-網頁後端-2",
                            title: "網頁後端技能實務與應用",
                            time: "優惠倒數 20 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            img: `${import.meta.env.BASE_URL}image/course-9.png`,
                            title: "網頁後端技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-5.png`,
                            name: "Jenny Cooper",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 20 天",
                            progress: "73%"
                            },
                            classData: {
                            title: "網頁後端技能實務與應用",
                            category: "網頁後端",
                            caption: "這門課將帶你深入了解網頁後端的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握網頁後端的知識與應用能力。",
                            tag: [
                            "網頁後端",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "Jenny Cooper",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-5.png`,
                            teacherCaption: "網頁後端 領域專業講師",
                            teacherCaption02: "專注於 網頁後端 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "網頁後端 專業課程推薦",
                            teacherIntroduce: "Jenny Cooper 致力於推廣 網頁後端 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "網頁後端主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握網頁後端的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "網頁後端進階應用技巧",
                            classContent: "進一步掌握 網頁後端 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-網站架設",
                            label: "網站架設",
                            children: [
                            {
                            id: "course-網站架設-1",
                            title: "網站架設主題完整學習課程",
                            time: "優惠倒數 11 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            img: `${import.meta.env.BASE_URL}image/course-1.png`,
                            title: "網站架設主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-6.png`,
                            name: "Johnny Khan",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 11 天",
                            progress: "77%"
                            },
                            classData: {
                            title: "網站架設主題完整學習課程",
                            category: "網站架設",
                            caption: "這門課將帶你深入了解網站架設的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握網站架設的知識與應用能力。",
                            tag: [
                            "網站架設",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "Johnny Khan",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-6.png`,
                            teacherCaption: "網站架設 領域專業講師",
                            teacherCaption02: "專注於 網站架設 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "網站架設 專業課程推薦",
                            teacherIntroduce: "Johnny Khan 致力於推廣 網站架設 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "網站架設主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握網站架設的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "網站架設進階應用技巧",
                            classContent: "進一步掌握 網站架設 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-網站架設-2",
                            title: "網站架設技能實務與應用",
                            time: "優惠倒數 13 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            img: `${import.meta.env.BASE_URL}image/course-2.png`,
                            title: "網站架設技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-7.png`,
                            name: "Annie Lin",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 13 天",
                            progress: "64%"
                            },
                            classData: {
                            title: "網站架設技能實務與應用",
                            category: "網站架設",
                            caption: "這門課將帶你深入了解網站架設的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握網站架設的知識與應用能力。",
                            tag: [
                            "網站架設",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "Annie Lin",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-7.png`,
                            teacherCaption: "網站架設 領域專業講師",
                            teacherCaption02: "專注於 網站架設 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "網站架設 專業課程推薦",
                            teacherIntroduce: "Annie Lin 致力於推廣 網站架設 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "網站架設主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握網站架設的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "網站架設進階應用技巧",
                            classContent: "進一步掌握 網站架設 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-資訊安全",
                            label: "資訊安全",
                            children: [
                            {
                            id: "course-資訊安全-1",
                            title: "資訊安全主題完整學習課程",
                            time: "優惠倒數 17 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            img: `${import.meta.env.BASE_URL}image/course-3.png`,
                            title: "資訊安全主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                            name: "六角學院",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 17 天",
                            progress: "64%"
                            },
                            classData: {
                            title: "資訊安全主題完整學習課程",
                            category: "資訊安全",
                            caption: "這門課將帶你深入了解資訊安全的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握資訊安全的知識與應用能力。",
                            tag: [
                            "資訊安全",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "六角學院",
                            teacherImg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                            teacherCaption: "資訊安全 領域專業講師",
                            teacherCaption02: "專注於 資訊安全 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "資訊安全 專業課程推薦",
                            teacherIntroduce: "六角學院 致力於推廣 資訊安全 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "資訊安全主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握資訊安全的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "資訊安全進階應用技巧",
                            classContent: "進一步掌握 資訊安全 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-資訊安全-2",
                            title: "資訊安全技能實務與應用",
                            time: "優惠倒數 18 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            img: `${import.meta.env.BASE_URL}image/course-4.png`,
                            title: "資訊安全技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                            name: "Mr.Robert",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 18 天",
                            progress: "58%"
                            },
                            classData: {
                            title: "資訊安全技能實務與應用",
                            category: "資訊安全",
                            caption: "這門課將帶你深入了解資訊安全的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握資訊安全的知識與應用能力。",
                            tag: [
                            "資訊安全",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "Mr.Robert",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                            teacherCaption: "資訊安全 領域專業講師",
                            teacherCaption02: "專注於 資訊安全 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "資訊安全 專業課程推薦",
                            teacherIntroduce: "Mr.Robert 致力於推廣 資訊安全 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "資訊安全主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握資訊安全的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "資訊安全進階應用技巧",
                            classContent: "進一步掌握 資訊安全 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-程式語言",
                            label: "程式語言",
                            children: [
                            {
                            id: "course-程式語言-1",
                            title: "程式語言主題完整學習課程",
                            time: "優惠倒數 5 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            img: `${import.meta.env.BASE_URL}image/course-9.png`,
                            title: "程式語言主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                            name: "Kelly Beck",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 5 天",
                            progress: "89%"
                            },
                            classData: {
                            title: "程式語言主題完整學習課程",
                            category: "程式語言",
                            caption: "這門課將帶你深入了解程式語言的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握程式語言的知識與應用能力。",
                            tag: [
                                "程式語言",
                                "初學者友善",
                                "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "Kelly Beck",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                            teacherCaption: "程式語言 領域專業講師",
                            teacherCaption02: "專注於 程式語言 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "程式語言 專業課程推薦",
                            teacherIntroduce: "Kelly Beck 致力於推廣 程式語言 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "程式語言主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握程式語言的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "程式語言進階應用技巧",
                            classContent: "進一步掌握 程式語言 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-程式語言-2",
                            title: "程式語言技能實務與應用",
                            time: "優惠倒數 5 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            img: `${import.meta.env.BASE_URL}image/course-1.png`,
                            title: "程式語言技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                            name: "K.Lee",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 5 天",
                            progress: "92%"
                            },
                            classData: {
                            title: "程式語言技能實務與應用",
                            category: "程式語言",
                            caption: "這門課將帶你深入了解程式語言的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握程式語言的知識與應用能力。",
                            tag: [
                            "程式語言",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "K.Lee",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                            teacherCaption: "程式語言 領域專業講師",
                            teacherCaption02: "專注於 程式語言 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "程式語言 專業課程推薦",
                            teacherIntroduce: "K.Lee 致力於推廣 程式語言 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "程式語言主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握程式語言的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "程式語言進階應用技巧",
                            classContent: "進一步掌握 程式語言 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-遊戲開發",
                            label: "遊戲開發",
                            children: [
                            {
                            id: "course-遊戲開發-1",
                            title: "遊戲開發主題完整學習課程",
                            time: "優惠倒數 19 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            img: `${import.meta.env.BASE_URL}image/course-2.png`,
                            title: "遊戲開發主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-4.png`,
                            name: "Devon Lane",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 19 天",
                            progress: "72%"
                            },
                            classData: {
                            title: "遊戲開發主題完整學習課程",
                            category: "遊戲開發",
                            caption: "這門課將帶你深入了解遊戲開發的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握遊戲開發的知識與應用能力。",
                            tag: [
                            "遊戲開發",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "Devon Lane",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-4.png`,
                            teacherCaption: "遊戲開發 領域專業講師",
                            teacherCaption02: "專注於 遊戲開發 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "遊戲開發 專業課程推薦",
                            teacherIntroduce: "Devon Lane 致力於推廣 遊戲開發 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "遊戲開發主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握遊戲開發的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "遊戲開發進階應用技巧",
                            classContent: "進一步掌握 遊戲開發 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-遊戲開發-2",
                            title: "遊戲開發技能實務與應用",
                            time: "優惠倒數 10 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            img: `${import.meta.env.BASE_URL}image/course-3.png`,
                            title: "遊戲開發技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-5.png`,
                            name: "Jenny Cooper",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 10 天",
                            progress: "74%"
                            },
                            classData: {
                            title: "遊戲開發技能實務與應用",
                            category: "遊戲開發",
                            caption: "這門課將帶你深入了解遊戲開發的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握遊戲開發的知識與應用能力。",
                            tag: [
                            "遊戲開發",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "Jenny Cooper",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-5.png`,
                            teacherCaption: "遊戲開發 領域專業講師",
                            teacherCaption02: "專注於 遊戲開發 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "遊戲開發 專業課程推薦",
                            teacherIntroduce: "Jenny Cooper 致力於推廣 遊戲開發 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "遊戲開發主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握遊戲開發的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "遊戲開發進階應用技巧",
                            classContent: "進一步掌握 遊戲開發 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-資料科學",
                            label: "資料科學",
                            children: [
                            {
                            id: "course-資料科學-1",
                            title: "資料科學主題完整學習課程",
                            time: "優惠倒數 8 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            img: `${import.meta.env.BASE_URL}image/course-4.png`,
                            title: "資料科學主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-6.png`,
                            name: "Johnny Khan",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 8 天",
                            progress: "93%"
                            },
                            classData: {
                            title: "資料科學主題完整學習課程",
                            category: "資料科學",
                            caption: "這門課將帶你深入了解資料科學的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握資料科學的知識與應用能力。",
                            tag: [
                            "資料科學",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "Johnny Khan",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-6.png`,
                            teacherCaption: "資料科學 領域專業講師",
                            teacherCaption02: "專注於 資料科學 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "資料科學 專業課程推薦",
                            teacherIntroduce: "Johnny Khan 致力於推廣 資料科學 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "資料科學主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握資料科學的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "資料科學進階應用技巧",
                            classContent: "進一步掌握 資料科學 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-資料科學-2",
                            title: "資料科學技能實務與應用",
                            time: "優惠倒數 16 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            img: `${import.meta.env.BASE_URL}image/course-9.png`,
                            title: "資料科學技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-7.png`,
                            name: "Annie Lin",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 16 天",
                            progress: "89%"
                            },
                            classData: {
                            title: "資料科學技能實務與應用",
                            category: "資料科學",
                            caption: "這門課將帶你深入了解資料科學的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握資料科學的知識與應用能力。",
                            tag: [
                            "資料科學",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "Annie Lin",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-7.png`,
                            teacherCaption: "資料科學 領域專業講師",
                            teacherCaption02: "專注於 資料科學 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "資料科學 專業課程推薦",
                            teacherIntroduce: "Annie Lin 致力於推廣 資料科學 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "資料科學主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握資料科學的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "資料科學進階應用技巧",
                            classContent: "進一步掌握 資料科學 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-人工智慧",
                            label: "人工智慧",
                            children: [
                            {
                            id: "course-人工智慧-1",
                            title: "人工智慧主題完整學習課程",
                            time: "優惠倒數 15 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            img: `${import.meta.env.BASE_URL}image/course-1.png`,
                            title: "人工智慧主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                            name: "六角學院",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 15 天",
                            progress: "71%"
                            },
                            classData: {
                            title: "人工智慧主題完整學習課程",
                            category: "人工智慧",
                            caption: "這門課將帶你深入了解人工智慧的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握人工智慧的知識與應用能力。",
                            tag: [
                            "人工智慧",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "六角學院",
                            teacherImg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                            teacherCaption: "人工智慧 領域專業講師",
                            teacherCaption02: "專注於 人工智慧 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "人工智慧 專業課程推薦",
                            teacherIntroduce: "六角學院 致力於推廣 人工智慧 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "人工智慧主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握人工智慧的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "人工智慧進階應用技巧",
                            classContent: "進一步掌握 人工智慧 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-人工智慧-2",
                            title: "人工智慧技能實務與應用",
                            time: "優惠倒數 14 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            img: `${import.meta.env.BASE_URL}image/course-2.png`,
                            title: "人工智慧技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                            name: "Mr.Robert",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 14 天",
                            progress: "56%"
                            },
                            classData: {
                            title: "人工智慧技能實務與應用",
                            category: "人工智慧",
                            caption: "這門課將帶你深入了解人工智慧的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握人工智慧的知識與應用能力。",
                            tag: [
                            "人工智慧",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "Mr.Robert",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                            teacherCaption: "人工智慧 領域專業講師",
                            teacherCaption02: "專注於 人工智慧 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "人工智慧 專業課程推薦",
                            teacherIntroduce: "Mr.Robert 致力於推廣 人工智慧 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "人工智慧主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握人工智慧的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "人工智慧進階應用技巧",
                            classContent: "進一步掌握 人工智慧 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            },
                            {
                            id: "sub-量化分析",
                            label: "量化分析",
                            children: [
                            {
                            id: "course-量化分析-1",
                            title: "量化分析主題完整學習課程",
                            time: "優惠倒數 10 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            img: `${import.meta.env.BASE_URL}image/course-3.png`,
                            title: "量化分析主題完整學習課程",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                            name: "Kelly Beck",
                            position: "資深講師",
                            price: "2055",
                            origin_price: "2555",
                            score: "4.1",
                            NumberOfPeople: "310",
                            time: "優惠倒數 10 天",
                            progress: "95%"
                            },
                            classData: {
                            title: "量化分析主題完整學習課程",
                            category: "量化分析",
                            caption: "這門課將帶你深入了解量化分析的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握量化分析的知識與應用能力。",
                            tag: [
                            "量化分析",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                            NumberOfPeople: "310",
                            score: "4.1",
                            teacher: {
                            teacherName: "Kelly Beck",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                            teacherCaption: "量化分析 領域專業講師",
                            teacherCaption02: "專注於 量化分析 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "量化分析 專業課程推薦",
                            teacherIntroduce: "Kelly Beck 致力於推廣 量化分析 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "量化分析主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握量化分析的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "量化分析進階應用技巧",
                            classContent: "進一步掌握 量化分析 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            },
                            {
                            id: "course-量化分析-2",
                            title: "量化分析技能實務與應用",
                            time: "優惠倒數 11 天",
                            cardData: {
                            bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            img: `${import.meta.env.BASE_URL}image/course-4.png`,
                            title: "量化分析技能實務與應用",
                            discount: "",
                            discount_state: false,
                            userimg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                            name: "K.Lee",
                            position: "資深講師",
                            price: "2110",
                            origin_price: "2610",
                            score: "4.2",
                            NumberOfPeople: "320",
                            time: "優惠倒數 11 天",
                            progress: "74%"
                            },
                            classData: {
                            title: "量化分析技能實務與應用",
                            category: "量化分析",
                            caption: "這門課將帶你深入了解量化分析的核心概念與實作技巧，適合初學者與有經驗的學員。",
                            content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握量化分析的知識與應用能力。",
                            tag: [
                            "量化分析",
                            "初學者友善",
                            "完整路線"
                            ],
                            img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                            NumberOfPeople: "320",
                            score: "4.2",
                            teacher: {
                            teacherName: "K.Lee",
                            teacherImg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                            teacherCaption: "量化分析 領域專業講師",
                            teacherCaption02: "專注於 量化分析 教學與實務經驗傳授。",
                            score: "4.3",
                            scoreTitle: "量化分析 專業課程推薦",
                            teacherIntroduce: "K.Lee 致力於推廣 量化分析 教育，協助學員在職場中展現實力。"
                            },
                            classContent: [
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                            classTitle: "量化分析主題入門：從基礎到實戰",
                            classContent: "你將學習如何掌握量化分析的基礎知識與實務應用，打好專業基礎。"
                            },
                            {
                            classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                            classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                            classTitle: "量化分析進階應用技巧",
                            classContent: "進一步掌握 量化分析 的進階技巧與應用實例，強化開發能力。"
                            }
                            ],
                            classAccordion: [
                            {
                            id: 1,
                            title: "課程介紹與目標",
                            bodycontent: [
                            {
                            icon: "videocam",
                            content: "歡迎加入本課程",
                            duration: "00:30",
                            trylook: true
                            },
                            {
                            icon: "videocam",
                            content: "課程學習重點",
                            duration: "01:00",
                            trylook: false
                            },
                            {
                            icon: "menu_book",
                            content: "前置準備與安裝環境",
                            duration: "00:45",
                            trylook: false
                            }
                            ]
                            }
                            ]
                            },
                            comments: [ ]
                            }
                            ]
                            }
                            ]
                        },
                        {
                        id: "cat-music",
                        label: "音樂",
                        children: [
                        {
                        id: "sub-music-1",
                        label: "聲樂演唱",
                        children: [
                        {
                        id: "course-聲樂演唱-1",
                        title: "聲樂演唱主題完整學習課程",
                        time: "優惠倒數 9 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        img: `${import.meta.env.BASE_URL}image/course-9.png`,
                        title: "聲樂演唱主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                        name: "六角學院",
                        position: "資深講師",
                        price: "2525",
                        origin_price: "3138",
                        score: "4.3",
                        NumberOfPeople: "393",
                        time: "優惠倒數 9 天",
                        progress: "42%"
                        },
                        classData: {
                        title: "聲樂演唱主題完整學習課程",
                        category: "聲樂演唱",
                        caption: "這門課將帶你深入了解聲樂演唱的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握聲樂演唱的知識與應用能力。",
                        tag: [
                        "聲樂演唱",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        NumberOfPeople: "393",
                        score: "4.3",
                        teacher: {
                        teacherName: "六角學院",
                        teacherImg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                        teacherCaption: "聲樂演唱 領域專業講師",
                        teacherCaption02: "專注於 聲樂演唱 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "聲樂演唱 專業課程推薦",
                        teacherIntroduce: "六角學院 致力於推廣 聲樂演唱 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "聲樂演唱主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握聲樂演唱的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "聲樂演唱進階應用技巧",
                        classContent: "進一步掌握 聲樂演唱 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-聲樂演唱-2",
                        title: "聲樂演唱技能實務與應用",
                        time: "優惠倒數 5 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        img: `${import.meta.env.BASE_URL}image/course-1.png`,
                        title: "聲樂演唱技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                        name: "Mr.Robert",
                        position: "資深講師",
                        price: "2309",
                        origin_price: "3324",
                        score: "3.8",
                        NumberOfPeople: "467",
                        time: "優惠倒數 5 天",
                        progress: "22%"
                        },
                        classData: {
                        title: "聲樂演唱技能實務與應用",
                        category: "聲樂演唱",
                        caption: "這門課將帶你深入了解聲樂演唱的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握聲樂演唱的知識與應用能力。",
                        tag: [
                        "聲樂演唱",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        NumberOfPeople: "467",
                        score: "3.8",
                        teacher: {
                        teacherName: "Mr.Robert",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                        teacherCaption: "聲樂演唱 領域專業講師",
                        teacherCaption02: "專注於 聲樂演唱 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "聲樂演唱 專業課程推薦",
                        teacherIntroduce: "Mr.Robert 致力於推廣 聲樂演唱 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "聲樂演唱主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握聲樂演唱的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "聲樂演唱進階應用技巧",
                        classContent: "進一步掌握 聲樂演唱 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-2",
                        label: "樂器演奏",
                        children: [
                        {
                        id: "course-樂器演奏-1",
                        title: "樂器演奏主題完整學習課程",
                        time: "優惠倒數 4 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        img: `${import.meta.env.BASE_URL}image/course-2.png`,
                        title: "樂器演奏主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                        name: "Kelly Beck",
                        position: "資深講師",
                        price: "2565",
                        origin_price: "3461",
                        score: "4.8",
                        NumberOfPeople: "135",
                        time: "優惠倒數 4 天",
                        progress: "25%"
                        },
                        classData: {
                        title: "樂器演奏主題完整學習課程",
                        category: "樂器演奏",
                        caption: "這門課將帶你深入了解樂器演奏的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握樂器演奏的知識與應用能力。",
                        tag: [
                        "樂器演奏",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        NumberOfPeople: "135",
                        score: "4.8",
                        teacher: {
                        teacherName: "Kelly Beck",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                        teacherCaption: "樂器演奏 領域專業講師",
                        teacherCaption02: "專注於 樂器演奏 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "樂器演奏 專業課程推薦",
                        teacherIntroduce: "Kelly Beck 致力於推廣 樂器演奏 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "樂器演奏主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握樂器演奏的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "樂器演奏進階應用技巧",
                        classContent: "進一步掌握 樂器演奏 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-樂器演奏-2",
                        title: "樂器演奏技能實務與應用",
                        time: "優惠倒數 10 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        img: `${import.meta.env.BASE_URL}image/course-3.png`,
                        title: "樂器演奏技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                        name: "K.Lee",
                        position: "資深講師",
                        price: "2939",
                        origin_price: "3843",
                        score: "4.3",
                        NumberOfPeople: "148",
                        time: "優惠倒數 10 天",
                        progress: "24%"
                        },
                        classData: {
                        title: "樂器演奏技能實務與應用",
                        category: "樂器演奏",
                        caption: "這門課將帶你深入了解樂器演奏的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握樂器演奏的知識與應用能力。",
                        tag: [
                        "樂器演奏",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        NumberOfPeople: "148",
                        score: "4.3",
                        teacher: {
                        teacherName: "K.Lee",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                        teacherCaption: "樂器演奏 領域專業講師",
                        teacherCaption02: "專注於 樂器演奏 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "樂器演奏 專業課程推薦",
                        teacherIntroduce: "K.Lee 致力於推廣 樂器演奏 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "樂器演奏主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握樂器演奏的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "樂器演奏進階應用技巧",
                        classContent: "進一步掌握 樂器演奏 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-3",
                        label: "音樂理論",
                        children: [
                        {
                        id: "course-音樂理論-1",
                        title: "音樂理論主題完整學習課程",
                        time: "優惠倒數 13 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        img: `${import.meta.env.BASE_URL}image/course-4.png`,
                        title: "音樂理論主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-4.png`,
                        name: "Devon Lane",
                        position: "資深講師",
                        price: "2305",
                        origin_price: "3136",
                        score: "4.7",
                        NumberOfPeople: "439",
                        time: "優惠倒數 13 天",
                        progress: "91%"
                        },
                        classData: {
                        title: "音樂理論主題完整學習課程",
                        category: "音樂理論",
                        caption: "這門課將帶你深入了解音樂理論的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握音樂理論的知識與應用能力。",
                        tag: [
                        "音樂理論",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        NumberOfPeople: "439",
                        score: "4.7",
                        teacher: {
                        teacherName: "Devon Lane",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-4.png`,
                        teacherCaption: "音樂理論 領域專業講師",
                        teacherCaption02: "專注於 音樂理論 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "音樂理論 專業課程推薦",
                        teacherIntroduce: "Devon Lane 致力於推廣 音樂理論 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "音樂理論主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握音樂理論的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "音樂理論進階應用技巧",
                        classContent: "進一步掌握 音樂理論 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-音樂理論-2",
                        title: "音樂理論技能實務與應用",
                        time: "優惠倒數 6 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        img: `${import.meta.env.BASE_URL}image/course-9.png`,
                        title: "音樂理論技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-5.png`,
                        name: "Jenny Cooper",
                        position: "資深講師",
                        price: "2664",
                        origin_price: "3662",
                        score: "4.9",
                        NumberOfPeople: "396",
                        time: "優惠倒數 6 天",
                        progress: "97%"
                        },
                        classData: {
                        title: "音樂理論技能實務與應用",
                        category: "音樂理論",
                        caption: "這門課將帶你深入了解音樂理論的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握音樂理論的知識與應用能力。",
                        tag: [
                        "音樂理論",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        NumberOfPeople: "396",
                        score: "4.9",
                        teacher: {
                        teacherName: "Jenny Cooper",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-5.png`,
                        teacherCaption: "音樂理論 領域專業講師",
                        teacherCaption02: "專注於 音樂理論 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "音樂理論 專業課程推薦",
                        teacherIntroduce: "Jenny Cooper 致力於推廣 音樂理論 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "音樂理論主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握音樂理論的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "音樂理論進階應用技巧",
                        classContent: "進一步掌握 音樂理論 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-4",
                        label: "作曲編曲",
                        children: [
                        {
                        id: "course-作曲編曲-1",
                        title: "作曲編曲主題完整學習課程",
                        time: "優惠倒數 4 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        img: `${import.meta.env.BASE_URL}image/course-1.png`,
                        title: "作曲編曲主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-6.png`,
                        name: "Johnny Khan",
                        position: "資深講師",
                        price: "2492",
                        origin_price: "3147",
                        score: "3.6",
                        NumberOfPeople: "490",
                        time: "優惠倒數 4 天",
                        progress: "82%"
                        },
                        classData: {
                        title: "作曲編曲主題完整學習課程",
                        category: "作曲編曲",
                        caption: "這門課將帶你深入了解作曲編曲的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握作曲編曲的知識與應用能力。",
                        tag: [
                        "作曲編曲",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        NumberOfPeople: "490",
                        score: "3.6",
                        teacher: {
                        teacherName: "Johnny Khan",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-6.png`,
                        teacherCaption: "作曲編曲 領域專業講師",
                        teacherCaption02: "專注於 作曲編曲 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "作曲編曲 專業課程推薦",
                        teacherIntroduce: "Johnny Khan 致力於推廣 作曲編曲 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "作曲編曲主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握作曲編曲的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "作曲編曲進階應用技巧",
                        classContent: "進一步掌握 作曲編曲 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-作曲編曲-2",
                        title: "作曲編曲技能實務與應用",
                        time: "優惠倒數 7 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        img: `${import.meta.env.BASE_URL}image/course-2.png`,
                        title: "作曲編曲技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-7.png`,
                        name: "Annie Lin",
                        position: "資深講師",
                        price: "2605",
                        origin_price: "3510",
                        score: "4.5",
                        NumberOfPeople: "169",
                        time: "優惠倒數 7 天",
                        progress: "55%"
                        },
                        classData: {
                        title: "作曲編曲技能實務與應用",
                        category: "作曲編曲",
                        caption: "這門課將帶你深入了解作曲編曲的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握作曲編曲的知識與應用能力。",
                        tag: [
                        "作曲編曲",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        NumberOfPeople: "169",
                        score: "4.5",
                        teacher: {
                        teacherName: "Annie Lin",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-7.png`,
                        teacherCaption: "作曲編曲 領域專業講師",
                        teacherCaption02: "專注於 作曲編曲 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "作曲編曲 專業課程推薦",
                        teacherIntroduce: "Annie Lin 致力於推廣 作曲編曲 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "作曲編曲主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握作曲編曲的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "作曲編曲進階應用技巧",
                        classContent: "進一步掌握 作曲編曲 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-5",
                        label: "數位音樂製作",
                        children: [
                        {
                        id: "course-數位音樂製作-1",
                        title: "數位音樂製作主題完整學習課程",
                        time: "優惠倒數 13 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        img: `${import.meta.env.BASE_URL}image/course-3.png`,
                        title: "數位音樂製作主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                        name: "六角學院",
                        position: "資深講師",
                        price: "2466",
                        origin_price: "3840",
                        score: "4.5",
                        NumberOfPeople: "347",
                        time: "優惠倒數 13 天",
                        progress: "84%"
                        },
                        classData: {
                        title: "數位音樂製作主題完整學習課程",
                        category: "數位音樂製作",
                        caption: "這門課將帶你深入了解數位音樂製作的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握數位音樂製作的知識與應用能力。",
                        tag: [
                        "數位音樂製作",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        NumberOfPeople: "347",
                        score: "4.5",
                        teacher: {
                        teacherName: "六角學院",
                        teacherImg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                        teacherCaption: "數位音樂製作 領域專業講師",
                        teacherCaption02: "專注於 數位音樂製作 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "數位音樂製作 專業課程推薦",
                        teacherIntroduce: "六角學院 致力於推廣 數位音樂製作 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "數位音樂製作主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握數位音樂製作的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "數位音樂製作進階應用技巧",
                        classContent: "進一步掌握 數位音樂製作 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-數位音樂製作-2",
                        title: "數位音樂製作技能實務與應用",
                        time: "優惠倒數 10 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        img: `${import.meta.env.BASE_URL}image/course-4.png`,
                        title: "數位音樂製作技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                        name: "Mr.Robert",
                        position: "資深講師",
                        price: "2320",
                        origin_price: "3857",
                        score: "4.7",
                        NumberOfPeople: "220",
                        time: "優惠倒數 10 天",
                        progress: "56%"
                        },
                        classData: {
                        title: "數位音樂製作技能實務與應用",
                        category: "數位音樂製作",
                        caption: "這門課將帶你深入了解數位音樂製作的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握數位音樂製作的知識與應用能力。",
                        tag: [
                        "數位音樂製作",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        NumberOfPeople: "220",
                        score: "4.7",
                        teacher: {
                        teacherName: "Mr.Robert",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                        teacherCaption: "數位音樂製作 領域專業講師",
                        teacherCaption02: "專注於 數位音樂製作 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "數位音樂製作 專業課程推薦",
                        teacherIntroduce: "Mr.Robert 致力於推廣 數位音樂製作 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "數位音樂製作主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握數位音樂製作的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "數位音樂製作進階應用技巧",
                        classContent: "進一步掌握 數位音樂製作 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-6",
                        label: "音樂欣賞",
                        children: [
                        {
                        id: "course-音樂欣賞-1",
                        title: "音樂欣賞主題完整學習課程",
                        time: "優惠倒數 9 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        img: `${import.meta.env.BASE_URL}image/course-9.png`,
                        title: "音樂欣賞主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                        name: "Kelly Beck",
                        position: "資深講師",
                        price: "2742",
                        origin_price: "3822",
                        score: "3.7",
                        NumberOfPeople: "497",
                        time: "優惠倒數 9 天",
                        progress: "66%"
                        },
                        classData: {
                        title: "音樂欣賞主題完整學習課程",
                        category: "音樂欣賞",
                        caption: "這門課將帶你深入了解音樂欣賞的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握音樂欣賞的知識與應用能力。",
                        tag: [
                        "音樂欣賞",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        NumberOfPeople: "497",
                        score: "3.7",
                        teacher: {
                        teacherName: "Kelly Beck",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                        teacherCaption: "音樂欣賞 領域專業講師",
                        teacherCaption02: "專注於 音樂欣賞 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "音樂欣賞 專業課程推薦",
                        teacherIntroduce: "Kelly Beck 致力於推廣 音樂欣賞 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "音樂欣賞主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握音樂欣賞的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "音樂欣賞進階應用技巧",
                        classContent: "進一步掌握 音樂欣賞 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-音樂欣賞-2",
                        title: "音樂欣賞技能實務與應用",
                        time: "優惠倒數 2 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        img: `${import.meta.env.BASE_URL}image/course-1.png`,
                        title: "音樂欣賞技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                        name: "K.Lee",
                        position: "資深講師",
                        price: "2747",
                        origin_price: "3786",
                        score: "4.9",
                        NumberOfPeople: "121",
                        time: "優惠倒數 2 天",
                        progress: "22%"
                        },
                        classData: {
                        title: "音樂欣賞技能實務與應用",
                        category: "音樂欣賞",
                        caption: "這門課將帶你深入了解音樂欣賞的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握音樂欣賞的知識與應用能力。",
                        tag: [
                        "音樂欣賞",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        NumberOfPeople: "121",
                        score: "4.9",
                        teacher: {
                        teacherName: "K.Lee",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                        teacherCaption: "音樂欣賞 領域專業講師",
                        teacherCaption02: "專注於 音樂欣賞 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "音樂欣賞 專業課程推薦",
                        teacherIntroduce: "K.Lee 致力於推廣 音樂欣賞 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "音樂欣賞主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握音樂欣賞的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "音樂欣賞進階應用技巧",
                        classContent: "進一步掌握 音樂欣賞 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-7",
                        label: "DJ技巧",
                        children: [
                        {
                        id: "course-DJ技巧-1",
                        title: "DJ技巧主題完整學習課程",
                        time: "優惠倒數 10 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        img: `${import.meta.env.BASE_URL}image/course-2.png`,
                        title: "DJ技巧主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-4.png`,
                        name: "Devon Lane",
                        position: "資深講師",
                        price: "2723",
                        origin_price: "3477",
                        score: "3.8",
                        NumberOfPeople: "305",
                        time: "優惠倒數 10 天",
                        progress: "37%"
                        },
                        classData: {
                        title: "DJ技巧主題完整學習課程",
                        category: "DJ技巧",
                        caption: "這門課將帶你深入了解DJ技巧的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握DJ技巧的知識與應用能力。",
                        tag: [
                        "DJ技巧",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        NumberOfPeople: "305",
                        score: "3.8",
                        teacher: {
                        teacherName: "Devon Lane",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-4.png`,
                        teacherCaption: "DJ技巧 領域專業講師",
                        teacherCaption02: "專注於 DJ技巧 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "DJ技巧 專業課程推薦",
                        teacherIntroduce: "Devon Lane 致力於推廣 DJ技巧 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "DJ技巧主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握DJ技巧的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "DJ技巧進階應用技巧",
                        classContent: "進一步掌握 DJ技巧 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-DJ技巧-2",
                        title: "DJ技巧技能實務與應用",
                        time: "優惠倒數 8 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        img: `${import.meta.env.BASE_URL}image/course-3.png`,
                        title: "DJ技巧技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-5.png`,
                        name: "Jenny Cooper",
                        position: "資深講師",
                        price: "2275",
                        origin_price: "3818",
                        score: "4.4",
                        NumberOfPeople: "441",
                        time: "優惠倒數 8 天",
                        progress: "33%"
                        },
                        classData: {
                        title: "DJ技巧技能實務與應用",
                        category: "DJ技巧",
                        caption: "這門課將帶你深入了解DJ技巧的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握DJ技巧的知識與應用能力。",
                        tag: [
                        "DJ技巧",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        NumberOfPeople: "441",
                        score: "4.4",
                        teacher: {
                        teacherName: "Jenny Cooper",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-5.png`,
                        teacherCaption: "DJ技巧 領域專業講師",
                        teacherCaption02: "專注於 DJ技巧 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "DJ技巧 專業課程推薦",
                        teacherIntroduce: "Jenny Cooper 致力於推廣 DJ技巧 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "DJ技巧主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握DJ技巧的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "DJ技巧進階應用技巧",
                        classContent: "進一步掌握 DJ技巧 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-8",
                        label: "混音與母帶後製",
                        children: [
                        {
                        id: "course-混音與母帶後製-1",
                        title: "混音與母帶後製主題完整學習課程",
                        time: "優惠倒數 13 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        img: `${import.meta.env.BASE_URL}image/course-4.png`,
                        title: "混音與母帶後製主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-6.png`,
                        name: "Johnny Khan",
                        position: "資深講師",
                        price: "2262",
                        origin_price: "3115",
                        score: "5.0",
                        NumberOfPeople: "414",
                        time: "優惠倒數 13 天",
                        progress: "29%"
                        },
                        classData: {
                        title: "混音與母帶後製主題完整學習課程",
                        category: "混音與母帶後製",
                        caption: "這門課將帶你深入了解混音與母帶後製的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握混音與母帶後製的知識與應用能力。",
                        tag: [
                        "混音與母帶後製",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        NumberOfPeople: "414",
                        score: "5.0",
                        teacher: {
                        teacherName: "Johnny Khan",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-6.png`,
                        teacherCaption: "混音與母帶後製 領域專業講師",
                        teacherCaption02: "專注於 混音與母帶後製 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "混音與母帶後製 專業課程推薦",
                        teacherIntroduce: "Johnny Khan 致力於推廣 混音與母帶後製 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "混音與母帶後製主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握混音與母帶後製的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "混音與母帶後製進階應用技巧",
                        classContent: "進一步掌握 混音與母帶後製 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-混音與母帶後製-2",
                        title: "混音與母帶後製技能實務與應用",
                        time: "優惠倒數 11 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        img: `${import.meta.env.BASE_URL}image/course-9.png`,
                        title: "混音與母帶後製技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-7.png`,
                        name: "Annie Lin",
                        position: "資深講師",
                        price: "2382",
                        origin_price: "3131",
                        score: "4.0",
                        NumberOfPeople: "414",
                        time: "優惠倒數 11 天",
                        progress: "51%"
                        },
                        classData: {
                        title: "混音與母帶後製技能實務與應用",
                        category: "混音與母帶後製",
                        caption: "這門課將帶你深入了解混音與母帶後製的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握混音與母帶後製的知識與應用能力。",
                        tag: [
                        "混音與母帶後製",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        NumberOfPeople: "414",
                        score: "4.0",
                        teacher: {
                        teacherName: "Annie Lin",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-7.png`,
                        teacherCaption: "混音與母帶後製 領域專業講師",
                        teacherCaption02: "專注於 混音與母帶後製 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "混音與母帶後製 專業課程推薦",
                        teacherIntroduce: "Annie Lin 致力於推廣 混音與母帶後製 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "混音與母帶後製主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握混音與母帶後製的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "混音與母帶後製進階應用技巧",
                        classContent: "進一步掌握 混音與母帶後製 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-9",
                        label: "影視配樂",
                        children: [
                        {
                        id: "course-影視配樂-1",
                        title: "影視配樂主題完整學習課程",
                        time: "優惠倒數 13 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        img: `${import.meta.env.BASE_URL}image/course-1.png`,
                        title: "影視配樂主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                        name: "六角學院",
                        position: "資深講師",
                        price: "2732",
                        origin_price: "3234",
                        score: "4.9",
                        NumberOfPeople: "434",
                        time: "優惠倒數 13 天",
                        progress: "60%"
                        },
                        classData: {
                        title: "影視配樂主題完整學習課程",
                        category: "影視配樂",
                        caption: "這門課將帶你深入了解影視配樂的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握影視配樂的知識與應用能力。",
                        tag: [
                        "影視配樂",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-4.png`,
                        NumberOfPeople: "434",
                        score: "4.9",
                        teacher: {
                        teacherName: "六角學院",
                        teacherImg: `${import.meta.env.BASE_URL}image/hex-logo.png`,
                        teacherCaption: "影視配樂 領域專業講師",
                        teacherCaption02: "專注於 影視配樂 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "影視配樂 專業課程推薦",
                        teacherIntroduce: "六角學院 致力於推廣 影視配樂 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "影視配樂主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握影視配樂的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "影視配樂進階應用技巧",
                        classContent: "進一步掌握 影視配樂 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-影視配樂-2",
                        title: "影視配樂技能實務與應用",
                        time: "優惠倒數 1 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        img: `${import.meta.env.BASE_URL}image/course-2.png`,
                        title: "影視配樂技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                        name: "Mr.Robert",
                        position: "資深講師",
                        price: "2792",
                        origin_price: "3198",
                        score: "5.0",
                        NumberOfPeople: "133",
                        time: "優惠倒數 1 天",
                        progress: "64%"
                        },
                        classData: {
                        title: "影視配樂技能實務與應用",
                        category: "影視配樂",
                        caption: "這門課將帶你深入了解影視配樂的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握影視配樂的知識與應用能力。",
                        tag: [
                        "影視配樂",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-3.png`,
                        NumberOfPeople: "133",
                        score: "5.0",
                        teacher: {
                        teacherName: "Mr.Robert",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-1.png`,
                        teacherCaption: "影視配樂 領域專業講師",
                        teacherCaption02: "專注於 影視配樂 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "影視配樂 專業課程推薦",
                        teacherIntroduce: "Mr.Robert 致力於推廣 影視配樂 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "影視配樂主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握影視配樂的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "影視配樂進階應用技巧",
                        classContent: "進一步掌握 影視配樂 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        },
                        {
                        id: "sub-music-10",
                        label: "音樂事業經營",
                        children: [
                        {
                        id: "course-音樂事業經營-1",
                        title: "音樂事業經營主題完整學習課程",
                        time: "優惠倒數 9 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        img: `${import.meta.env.BASE_URL}image/course-3.png`,
                        title: "音樂事業經營主題完整學習課程",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                        name: "Kelly Beck",
                        position: "資深講師",
                        price: "2523",
                        origin_price: "3819",
                        score: "4.0",
                        NumberOfPeople: "169",
                        time: "優惠倒數 9 天",
                        progress: "21%"
                        },
                        classData: {
                        title: "音樂事業經營主題完整學習課程",
                        category: "音樂事業經營",
                        caption: "這門課將帶你深入了解音樂事業經營的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握音樂事業經營的知識與應用能力。",
                        tag: [
                        "音樂事業經營",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-2.png`,
                        NumberOfPeople: "169",
                        score: "4.0",
                        teacher: {
                        teacherName: "Kelly Beck",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-2.png`,
                        teacherCaption: "音樂事業經營 領域專業講師",
                        teacherCaption02: "專注於 音樂事業經營 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "音樂事業經營 專業課程推薦",
                        teacherIntroduce: "Kelly Beck 致力於推廣 音樂事業經營 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "音樂事業經營主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握音樂事業經營的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "音樂事業經營進階應用技巧",
                        classContent: "進一步掌握 音樂事業經營 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        },
                        {
                        id: "course-音樂事業經營-2",
                        title: "音樂事業經營技能實務與應用",
                        time: "優惠倒數 4 天",
                        cardData: {
                        bigImg: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        img: `${import.meta.env.BASE_URL}image/course-4.png`,
                        title: "音樂事業經營技能實務與應用",
                        discount: "",
                        discount_state: false,
                        userimg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                        name: "K.Lee",
                        position: "資深講師",
                        price: "2438",
                        origin_price: "3123",
                        score: "4.8",
                        NumberOfPeople: "492",
                        time: "優惠倒數 4 天",
                        progress: "33%"
                        },
                        classData: {
                        title: "音樂事業經營技能實務與應用",
                        category: "音樂事業經營",
                        caption: "這門課將帶你深入了解音樂事業經營的核心概念與實作技巧，適合初學者與有經驗的學員。",
                        content: "課程內容豐富，涵蓋實作與概念並重，幫助你快速掌握音樂事業經營的知識與應用能力。",
                        tag: [
                        "音樂事業經營",
                        "初學者友善",
                        "完整路線"
                        ],
                        img: `${import.meta.env.BASE_URL}image/hero-1.png`,
                        NumberOfPeople: "492",
                        score: "4.8",
                        teacher: {
                        teacherName: "K.Lee",
                        teacherImg: `${import.meta.env.BASE_URL}image/teacher-3.png`,
                        teacherCaption: "音樂事業經營 領域專業講師",
                        teacherCaption02: "專注於 音樂事業經營 教學與實務經驗傳授。",
                        score: "4.3",
                        scoreTitle: "音樂事業經營 專業課程推薦",
                        teacherIntroduce: "K.Lee 致力於推廣 音樂事業經營 教育，協助學員在職場中展現實力。"
                        },
                        classContent: [
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-1.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-1.png`,
                        classTitle: "音樂事業經營主題入門：從基礎到實戰",
                        classContent: "你將學習如何掌握音樂事業經營的基礎知識與實務應用，打好專業基礎。"
                        },
                        {
                        classImgfirts: `${import.meta.env.BASE_URL}image/course-detail-2.png`,
                        classImgsecond: `${import.meta.env.BASE_URL}image/course-sm-detail-2.png`,
                        classTitle: "音樂事業經營進階應用技巧",
                        classContent: "進一步掌握 音樂事業經營 的進階技巧與應用實例，強化實務能力。"
                        }
                        ],
                        classAccordion: [
                        {
                        id: 1,
                        title: "課程介紹與目標",
                        bodycontent: [
                        {
                        icon: "videocam",
                        content: "歡迎加入本課程",
                        duration: "00:30",
                        trylook: true
                        },
                        {
                        icon: "videocam",
                        content: "課程學習重點",
                        duration: "01:00",
                        trylook: false
                        },
                        {
                        icon: "menu_book",
                        content: "前置準備與安裝環境",
                        duration: "00:45",
                        trylook: false
                        }
                        ]
                        }
                        ]
                        },
                        comments: [ ]
                        }
                        ]
                        }
                        ]
                        }
                        
                    ],
    search:[],

    CoursePageIntroTab:"所有課程",
    
  },
  reducers: {
    searchInput: (state,action) => {
      state.search = action.payload;
    },
    CoursePageIntroTabDataUp:(state,action) => {
        state.CoursePageIntroTab = action.payload;
    },

    addCommentToCourse: (state, action) => {//處裡留言系統
        const { courseId, newComment } = action.payload;

        state.defaultClassData.forEach(first => {
            first.children.forEach(second => {
                second.children.forEach(third => {
                    if (third.id === courseId) {
                    third.comments = [newComment, ...third.comments];
                    }
                });
            });
        });
    }
  },
});

export const { searchInput,CoursePageIntroTabDataUp,addCommentToCourse } = dataSlice.actions; //是為了在外部可以使用函式
export default dataSlice.reducer;


export const getCoursePageAllData = (input,id_first) => {
    const coursePageAllData = input.filter(item => item.id === id_first);
    return coursePageAllData;
}

export const getTopProgressItems = (input, num) => {
  const allProgressItems = [];

  input.forEach(section => {
    const groups = section.children || [];
    groups.forEach(group => {
      const items = group.children || [];
      items.forEach(item => {
        const progressStr = item.cardData?.progress;
        if (progressStr) {
             // 先解析進度值
            const progressValue = parseFloat(progressStr.replace('%', ''));
            const newItem = {
                ...item,
                cardData: {
                    ...item.cardData,        // 先展開原本 cardData
                    progressValue,           // 新增進度值
                    category: group.label,   // 新增分類
                },
            };
            allProgressItems.push(newItem);
        }
      });
    });
  });

  return allProgressItems
    .sort((a, b) => b.cardData.progressValue - a.cardData.progressValue)
    .slice(0, num);
};




export const handleGoToCoursePage = (input, id_third, navigate) => {
    let result = null;
    input.forEach(item_first => {
        if (result) return; // 提前跳出後續處理

        (item_first.children || []).forEach(item_second => {
            if (result) return;

            (item_second.children || []).forEach(item_third => {
                if (item_third.id === id_third) {
                    result = {
                        id_first: item_first.id,
                        id_second: item_second.id,
                        id_third: item_third.id,
                    };
                };
            });
        });
    });
    if (result) {
    navigate(`/CoursePage/${result.id_first}`);
    }
    return result;
}

export const handleGoToCoursePage02 = (input, id_first, navigate) => {
    let result = null;
    input.forEach(item_first => {
        if (item_first.id === id_first) {
            result = {
                id_first: item_first.id,
            };
        }; 
    });
    if (result) {
    navigate(`/CoursePage/${result.id_first}`);
    }
    return result;
}

export const handleGoToCoursePage03 = (input, id_second, navigate) => {
    let result = null;
    input.forEach(item_first => {
        if (result) return; // 提前跳出後續處理
        (item_first.children || []).forEach(item_second => {
            if (item_second.id === id_second) {
                result = {
                            id_first: item_first.id,
                            id_second: item_second.id,
                        };
            }
        });
    });
    if (result) {
    navigate(`/CoursePage/${result.id_first}`);
    }
    return result;
}


export const handleGoToClassPage = (input, id_third, navigate) => {
    let result = null;
    input.forEach(item_first => {
        if (result) return; // 提前跳出後續處理

        (item_first.children || []).forEach(item_second => {
            if (result) return;

            (item_second.children || []).forEach(item_third => {
                if (item_third.id === id_third) {
                    result = {
                        id_first: item_first.id,
                        id_second: item_second.id,
                        id_third: item_third.id,
                    };
                };
            });
        });
    });
    if (result) {
    navigate(`/CoursePage/${result.id_first}/ClassPage/${result.id_third}`);
    }
    return result;
};

export const handleGoToTeacherPage = (input, id_third, navigate) => {
    let result = null;
    input.forEach(item_first => {
        if (result) return; // 提前跳出後續處理

        (item_first.children || []).forEach(item_second => {
            if (result) return;

            (item_second.children || []).forEach(item_third => {
                if (item_third.id === id_third) {
                    result = {
                        id_first: item_first.id,
                        id_third: item_third.id,
                    };
                };
            });
        });
    });
    if (result) {
    navigate(`/CoursePage/${result.id_first}/ClassPage/${id_third}/TeacherPage/${id_third}`);
    }
    return result;
}

export const handleTeacherALLDate = (input, Name) => { //取得導師的所有課程資料
    let result = [];
    input.forEach(item_first => {
        (item_first.children || []).forEach(item_second => {
            (item_second.children || []).forEach(item_third => {
                if (item_third.classData?.teacher?.teacherName === Name) {
                    result.push({ ...item_third });
                }
            });
        });
    });
    return result;
}

export const handleTeacherNumALLDate = (input) => { //取得導師的總學生量
    let total = 0;
    input.forEach(item_first => {
        const num = parseInt(item_first.classData.NumberOfPeople, 10); // 確保是數字
        if (!isNaN(num)) {
          total += num;
        } 
    });
    return total;
}

export const handleTeacherCommentsALLDate = (input) => { //取得導師的總評論數
    let total = 0;
    input.forEach(item_first => {
        const num = parseInt(item_first.comments.length, 10); // 確保是數字
        if (!isNaN(num)) {
          total += num;
        } 
    });
    return total;
}

export const handleShoppingCartData = (inputArray = []) => {
    //inputArray = []空值時免報錯
    const input = inputArray[0]; // 取出唯一的一筆
    if (!input || !input.id) return {}; // 資料不完整時，回傳空物件
            return {
            id: input.id,
            title: input.title,
            img: input.classData?.img || '',
            price: input.cardData?.price || 0,
            paySelect:false,
            quantity: 1,
        };
};

export const handleCartTotalPrice = (input) => {
    let total = null;
    if(input.handleShoppingCart){
        input.handleShoppingCart.forEach((item)=>{
                total += parseInt(item.price, 10);
        })
    }
    return total;
};

export const getProfileDataItems = (inputData, inputData2) => {
  const result = [];
  inputData.forEach(section => {
    const groups = section.children || [];
    groups.forEach(group => {
      const items = group.children || [];
      items.forEach(item => {
        const progressStr = item.id;
        const isInClass = inputData2?.classes?.InClass?.some((itemData) => itemData.id === progressStr);
        if (isInClass) {
          result.push(item);
        }
      });
    });
  });
  return result;
};