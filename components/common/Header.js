import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black shadow-1 relative z-10">
      <div className="w-10/12 mx-auto flex justify-between items-end py-6 md:flex-col md:items-center">
        <Link href="/">
          <img className="w-60 cursor-pointer" src="/images/icons/logo.png" alt="logo" />
        </Link>
        <div className="flex items-center md:mt-6 md:w-full md:justify-between">
          <div className="flex mr-20 md:mr-0">
            <button className="w-8 mr-4">
              <img src="/images/icons/header-search.png" />
            </button>
            <button className="w-8 mr-4">
              <img src="/images/icons/header-notification.png" />
            </button>
            <button className="w-8">
              <img src="/images/icons/header-favourite.png" />
            </button>
          </div>
          <div className="w-60 relative group flex items-center h-14 rounded-md hover:bg-theme-gray-2 px-2 pb-2">
            <button className="w-full inline-flex justify-end">
              <img src="/images/icons/header-user.png" />
            </button>
            <div className="absolute w-60 z-10 uppercase invisible opacity-0 py-10 group-hover:visible group-hover:opacity-100 flex flex-col top-full overflow-hidden font-medium -mt-2 right-0 text-white rounded-md bg-theme-gray-2 ease-in duration-200">
              <Link href="/login">
                <a className="px-4 ease-in duration-300 hover:bg-theme-yellow hover:fill-black hover:text-black fill-white inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="scale-50"><path d="M16.125 28.75 13.583 26.208 18.042 21.708H4V18.208H18L13.5 13.75L16.083 11.25L24.833 20.042ZM20.417 35.542V32.042H32.542Q32.542 32.042 32.542 32.042Q32.542 32.042 32.542 32.042V7.958Q32.542 7.958 32.542 7.958Q32.542 7.958 32.542 7.958H20.417V4.458H32.542Q33.958 4.458 35 5.5Q36.042 6.542 36.042 7.958V32.042Q36.042 33.458 35 34.5Q33.958 35.542 32.542 35.542Z"/></svg>
                  Login
                </a>
              </Link>
              <Link href="/user">
              <a className="px-4 ease-in duration-300 hover:bg-theme-yellow hover:fill-black hover:text-black fill-white inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="scale-50" height="40" width="40"><path d="M2.5 35V29.958Q2.5 28.417 3.271 27.104Q4.042 25.792 5.5 25.083Q8.708 23.583 11.417 22.979Q14.125 22.375 16.667 22.375Q17.917 22.375 19.229 22.521Q20.542 22.667 22 23L19 26Q18.417 25.958 17.854 25.917Q17.292 25.875 16.625 25.875Q14.458 25.875 12.333 26.333Q10.208 26.792 7.042 28.208Q6.458 28.458 6.229 28.938Q6 29.417 6 29.958V31.5H18.5L22.208 35ZM26.25 35.167 19.875 28.792 22.333 26.333 26.25 30.25 35.042 21.458 37.542 23.917ZM16.625 19.625Q13.583 19.625 11.625 17.646Q9.667 15.667 9.667 12.625Q9.667 9.583 11.646 7.604Q13.625 5.625 16.625 5.625Q19.667 5.625 21.667 7.604Q23.667 9.583 23.667 12.625Q23.667 15.667 21.667 17.646Q19.667 19.625 16.625 19.625ZM18.5 31.5Q18.5 31.5 18.5 31.5Q18.5 31.5 18.5 31.5Q18.5 31.5 18.5 31.5Q18.5 31.5 18.5 31.5Q18.5 31.5 18.5 31.5Q18.5 31.5 18.5 31.5ZM16.667 16.125Q18.167 16.125 19.167 15.125Q20.167 14.125 20.167 12.625Q20.167 11.125 19.167 10.125Q18.167 9.125 16.625 9.125Q15.125 9.125 14.146 10.125Q13.167 11.125 13.167 12.625Q13.167 14.125 14.146 15.125Q15.125 16.125 16.667 16.125ZM16.667 12.625Q16.667 12.625 16.667 12.625Q16.667 12.625 16.667 12.625Q16.667 12.625 16.667 12.625Q16.667 12.625 16.667 12.625Q16.667 12.625 16.667 12.625Q16.667 12.625 16.667 12.625Q16.667 12.625 16.667 12.625Q16.667 12.625 16.667 12.625Z"/></svg>
                  Registrieren
                </a>
              </Link>
              <Link href="/">
              <a className="px-4 ease-in duration-300 hover:bg-theme-yellow hover:fill-black hover:text-black fill-white inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="scale-50" height="40" width="40"><path d="M4.5 30.292Q3.167 30.292 2.229 29.333Q1.292 28.375 1.292 27.042Q1.292 25.708 2.229 24.771Q3.167 23.833 4.5 23.833Q4.708 23.833 4.917 23.833Q5.125 23.833 5.417 23.875L13.5 15.792Q13.417 15.5 13.396 15.333Q13.375 15.167 13.375 14.917Q13.375 13.583 14.333 12.646Q15.292 11.708 16.625 11.708Q17.958 11.708 18.896 12.667Q19.833 13.625 19.833 14.958Q19.833 15.042 19.708 15.833L24.167 20.25Q24.458 20.167 24.646 20.146Q24.833 20.125 25.042 20.125Q25.292 20.125 25.479 20.125Q25.667 20.125 25.958 20.208L32.333 13.875Q32.25 13.583 32.271 13.375Q32.292 13.167 32.292 12.917Q32.292 11.583 33.229 10.646Q34.167 9.708 35.5 9.708Q36.875 9.708 37.792 10.646Q38.708 11.583 38.708 12.958Q38.708 14.292 37.771 15.229Q36.833 16.167 35.5 16.167Q35.292 16.167 35.083 16.167Q34.875 16.167 34.583 16.125L28.208 22.458Q28.292 22.75 28.292 22.958Q28.292 23.167 28.292 23.417Q28.292 24.708 27.354 25.667Q26.417 26.625 25.042 26.625Q23.708 26.625 22.771 25.667Q21.833 24.708 21.833 23.417Q21.833 23.167 21.854 22.958Q21.875 22.75 21.958 22.5L17.5 18.042Q17.25 18.125 17.042 18.146Q16.833 18.167 16.625 18.167Q16.542 18.167 15.708 18.042L7.667 26.125Q7.708 26.417 7.708 26.625Q7.708 26.833 7.708 27.083Q7.708 28.375 6.771 29.333Q5.833 30.292 4.5 30.292Z"/></svg>
                  Dashboard
                </a>
              </Link>
              <Link href="/dealer-list">
              <a className="px-4 ease-in duration-300 hover:bg-theme-yellow hover:fill-black hover:text-black fill-white inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="scale-50" height="40" width="40"><path d="M9.375 37.708Q7.167 37.708 5.625 36.146Q4.083 34.583 4.083 32.417V26.333H9.333V2.5L12 5.167L14.625 2.5L17.292 5.167L19.958 2.5L22.625 5.167L25.292 2.5L27.958 5.167L30.625 2.5L33.292 5.167L35.958 2.5V32.417Q35.958 34.583 34.396 36.146Q32.833 37.708 30.667 37.708ZM30.667 34.208Q31.417 34.208 31.937 33.708Q32.458 33.208 32.458 32.417V7.792H12.833V26.333H28.833V32.417Q28.833 33.208 29.354 33.708Q29.875 34.208 30.667 34.208ZM14.625 14.833V11.333H24.958V14.833ZM14.625 20.708V17.208H24.958V20.708ZM28.542 14.833Q27.833 14.833 27.333 14.313Q26.833 13.792 26.833 13.083Q26.833 12.375 27.333 11.854Q27.833 11.333 28.542 11.333Q29.292 11.333 29.812 11.854Q30.333 12.375 30.333 13.083Q30.333 13.792 29.812 14.313Q29.292 14.833 28.542 14.833ZM28.542 20.583Q27.833 20.583 27.333 20.062Q26.833 19.542 26.833 18.833Q26.833 18.125 27.333 17.604Q27.833 17.083 28.542 17.083Q29.292 17.083 29.812 17.604Q30.333 18.125 30.333 18.833Q30.333 19.542 29.812 20.062Q29.292 20.583 28.542 20.583ZM9.333 34.208H25.333V29.833H7.583V32.417Q7.583 33.208 8.083 33.708Q8.583 34.208 9.333 34.208ZM7.583 34.208Q7.583 34.208 7.583 33.708Q7.583 33.208 7.583 32.417V29.833V34.208Z"/></svg>
                  HANDLERLISTE
                </a>
              </Link>
              <Link href="/">
              <a className="px-4 ease-in duration-300 hover:bg-theme-yellow hover:fill-black hover:text-black fill-white inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="scale-50" height="40" width="40"><path d="M24.083 28.333H27.417V25.292H30.5V21.958H27.417V18.875H24.083V21.958H21.042V25.292H24.083ZM11.833 20.292H22.417V16.958H11.833ZM11.833 15.292H22.417V11.958H11.833ZM11.833 25.542H16V21.958H11.833ZM20 37.542Q16.333 37.542 13.104 36.188Q9.875 34.833 7.521 32.479Q5.167 30.125 3.812 26.896Q2.458 23.667 2.458 20Q2.458 16.333 3.812 13.104Q5.167 9.875 7.542 7.521Q9.917 5.167 13.125 3.813Q16.333 2.458 20 2.458Q23.667 2.458 26.896 3.813Q30.125 5.167 32.479 7.521Q34.833 9.875 36.188 13.104Q37.542 16.333 37.542 20Q37.542 23.708 36.188 26.896Q34.833 30.083 32.479 32.458Q30.125 34.833 26.896 36.188Q23.667 37.542 20 37.542ZM20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20ZM20 34.042Q25.958 34.042 30 30Q34.042 25.958 34.042 20Q34.042 14.042 30 10Q25.958 5.958 20 5.958Q14.042 5.958 10 10Q5.958 14.042 5.958 20Q5.958 25.958 10 30Q14.042 34.042 20 34.042Z"/></svg>
                  Inserat Aufgeben
                </a>
              </Link>
              <Link href="/">
              <a className="px-4 ease-in duration-300 hover:bg-theme-yellow hover:fill-black hover:text-black fill-white inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="scale-50" height="40" width="40"><path d="M12.042 14.042V10.542H35.708V14.042ZM12.042 21.708V18.208H35.708V21.708ZM12.042 29.458V25.958H35.708V29.458ZM6.167 14.125Q5.375 14.125 4.854 13.562Q4.333 13 4.333 12.292Q4.333 11.542 4.854 11Q5.375 10.458 6.125 10.458Q6.917 10.458 7.458 11Q8 11.542 8 12.292Q8 13.042 7.438 13.583Q6.875 14.125 6.167 14.125ZM6.167 21.833Q5.375 21.833 4.854 21.292Q4.333 20.75 4.333 20Q4.333 19.25 4.854 18.708Q5.375 18.167 6.125 18.167Q6.917 18.167 7.458 18.708Q8 19.25 8 20Q8 20.75 7.438 21.292Q6.875 21.833 6.167 21.833ZM6.167 29.542Q5.375 29.542 4.854 29Q4.333 28.458 4.333 27.708Q4.333 26.958 4.854 26.417Q5.375 25.875 6.125 25.875Q6.917 25.875 7.458 26.438Q8 27 8 27.708Q8 28.458 7.438 29Q6.875 29.542 6.167 29.542Z"/></svg>
                Meine Inserate
                </a>
              </Link>
              <Link href="/">
              <a className="px-4 ease-in duration-300 hover:bg-theme-yellow hover:fill-black hover:text-black fill-white inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="scale-50" height="40" width="40"><path d="M15.167 18.208H29.167L24.708 13.75L27.25 11.25L36.042 20.042L27.333 28.75L24.75 26.208L29.25 21.708H15.167ZM19.625 4.458V7.958H7.5Q7.5 7.958 7.5 7.958Q7.5 7.958 7.5 7.958V32.042Q7.5 32.042 7.5 32.042Q7.5 32.042 7.5 32.042H19.625V35.542H7.5Q6.083 35.542 5.042 34.5Q4 33.458 4 32.042V7.958Q4 6.542 5.042 5.5Q6.083 4.458 7.5 4.458Z"/></svg>
                  logout
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="relative group flex items-center h-14 rounded-md hover:bg-theme-gray-2 px-2 pb-2 ml-4">
            <button className="w-8 inline-block">
              <img src="/images/icons/header-menu.png" />
            </button>
            <div className="absolute w-12 invisible opacity-0 group-hover:visible group-hover:opacity-100 flex flex-col top-full overflow-hidden font-medium -mt-2 right-0 rounded-md bg-theme-gray-2 ease-in duration-200">
              <Link href="/">
                <a className="ease-in duration-300 border-b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    className="fill-white scale-50 hover:fill-theme-yellow ease-in duration-200 mx-1"
                    width="40"
                  >
                    <path d="M20 37.542Q16.333 37.542 13.125 36.167Q9.917 34.792 7.542 32.417Q5.167 30.042 3.812 26.812Q2.458 23.583 2.458 19.917Q2.458 16.292 3.812 13.083Q5.167 9.875 7.542 7.521Q9.917 5.167 13.125 3.813Q16.333 2.458 20 2.458Q23.667 2.458 26.875 3.813Q30.083 5.167 32.458 7.521Q34.833 9.875 36.188 13.083Q37.542 16.292 37.542 19.958Q37.542 23.625 36.188 26.833Q34.833 30.042 32.458 32.417Q30.083 34.792 26.854 36.167Q23.625 37.542 20 37.542ZM26.792 13.375H32.5Q31.208 10.875 29.021 9.104Q26.833 7.333 24.083 6.542Q25 7.958 25.646 9.625Q26.292 11.292 26.792 13.375ZM16.375 13.375H23.667Q23.208 11.417 22.25 9.479Q21.292 7.542 20 5.875Q18.792 7.25 17.958 9Q17.125 10.75 16.375 13.375ZM6.417 23.542H12.667Q12.542 22.542 12.5 21.688Q12.458 20.833 12.458 19.958Q12.458 18.958 12.521 18.146Q12.583 17.333 12.667 16.458H6.417Q6.125 17.333 6.042 18.125Q5.958 18.917 5.958 19.958Q5.958 20.958 6.042 21.792Q6.125 22.625 6.417 23.542ZM15.917 33.417Q15 32 14.354 30.333Q13.708 28.667 13.25 26.583H7.542Q8.917 29.167 10.917 30.771Q12.917 32.375 15.917 33.417ZM7.542 13.375H13.25Q13.708 11.375 14.333 9.729Q14.958 8.083 15.875 6.583Q13.167 7.333 11 9.083Q8.833 10.833 7.542 13.375ZM20 34.042Q21.292 32.583 22.167 30.75Q23.042 28.917 23.625 26.583H16.375Q16.958 28.792 17.833 30.688Q18.708 32.583 20 34.042ZM15.792 23.542H24.25Q24.417 22.458 24.458 21.646Q24.5 20.833 24.5 19.958Q24.5 19.083 24.458 18.312Q24.417 17.542 24.25 16.458H15.792Q15.625 17.542 15.583 18.312Q15.542 19.083 15.542 19.958Q15.542 20.833 15.583 21.646Q15.625 22.458 15.792 23.542ZM24.125 33.417Q26.75 32.542 28.938 30.771Q31.125 29 32.5 26.583H26.833Q26.333 28.625 25.667 30.312Q25 32 24.125 33.417ZM27.333 23.542H33.625Q33.875 22.625 33.958 21.792Q34.042 20.958 34.042 19.958Q34.042 18.917 33.958 18.125Q33.875 17.333 33.625 16.458H27.375Q27.458 17.667 27.5 18.438Q27.542 19.208 27.542 19.958Q27.542 20.833 27.479 21.646Q27.417 22.458 27.333 23.542Z" />
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="ease-in duration-300 border-b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    className="fill-white scale-50 hover:fill-theme-yellow ease-in duration-200 mx-1"
                    width="40"
                  >
                    <path d="M24.958 35.667Q19.708 35.667 15.708 32.729Q11.708 29.792 10.375 25.208H4.292V21.708H9.625Q9.542 21.292 9.542 20.854Q9.542 20.417 9.542 20Q9.542 19.583 9.542 19.146Q9.542 18.708 9.625 18.292H4.292V14.792H10.375Q11.875 10.042 15.792 7.188Q19.708 4.333 24.958 4.333Q28.083 4.333 30.875 5.438Q33.667 6.542 35.75 8.625L32.708 11.708Q31.167 10.292 29.167 9.5Q27.167 8.708 24.958 8.708Q21.583 8.708 18.979 10.271Q16.375 11.833 15.125 14.792H25.292V18.292H13.958Q13.917 18.708 13.896 19.146Q13.875 19.583 13.875 20Q13.875 20.417 13.896 20.854Q13.917 21.292 13.958 21.708H25.292V25.208H15.167Q16.25 27.917 18.875 29.604Q21.5 31.292 24.958 31.292Q27.167 31.292 29.188 30.5Q31.208 29.708 32.708 28.292L35.75 31.333Q33.542 33.417 30.792 34.542Q28.042 35.667 24.958 35.667Z" />
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="ease-in duration-300 border-b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    className="fill-white scale-50 hover:fill-theme-yellow ease-in duration-200 mx-1"
                    width="40"
                  >
                    <path d="M15.292 37.542 14.458 32.083Q13.917 31.833 13.271 31.479Q12.625 31.125 12.125 30.75L6.958 33L2.25 24.583L6.75 21.208Q6.708 20.917 6.688 20.562Q6.667 20.208 6.667 19.917Q6.667 19.625 6.688 19.292Q6.708 18.958 6.75 18.667L2.25 15.333L6.958 6.958L12 9.208Q12.5 8.833 13.188 8.438Q13.875 8.042 14.458 7.833L15.292 2.375H24.75L25.542 7.833Q26.125 8.083 26.812 8.458Q27.5 8.833 28 9.208L33.083 6.958L37.792 15.333L33.208 18.667Q33.25 18.958 33.271 19.333Q33.292 19.708 33.292 20Q33.292 20.292 33.271 20.646Q33.25 21 33.25 21.292L37.75 24.583L33 33L27.875 30.75Q27.375 31.083 26.75 31.479Q26.125 31.875 25.583 32.042L24.75 37.542ZM19.958 26.292Q22.583 26.292 24.438 24.438Q26.292 22.583 26.292 19.958Q26.292 17.333 24.438 15.479Q22.583 13.625 19.958 13.625Q17.333 13.625 15.479 15.479Q13.625 17.333 13.625 19.958Q13.625 22.583 15.479 24.438Q17.333 26.292 19.958 26.292ZM19.958 22.792Q18.75 22.792 17.938 21.958Q17.125 21.125 17.125 19.958Q17.125 18.75 17.958 17.938Q18.792 17.125 19.958 17.125Q21.125 17.125 21.958 17.958Q22.792 18.792 22.792 19.958Q22.792 21.125 21.958 21.958Q21.125 22.792 19.958 22.792ZM20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958Q20 19.958 20 19.958ZM18.208 34.042H21.75L22.375 29.417Q23.75 29.083 24.958 28.396Q26.167 27.708 27.208 26.708L31.458 28.542L33.125 25.583L29.375 22.75Q29.542 22.125 29.667 21.396Q29.792 20.667 29.792 19.958Q29.792 19.208 29.688 18.542Q29.583 17.875 29.417 17.125L33.125 14.375L31.5 11.417L27.208 13.208Q26.25 12.167 25.021 11.438Q23.792 10.708 22.333 10.417L21.833 5.875H18.167L17.667 10.417Q16.167 10.75 14.917 11.479Q13.667 12.208 12.75 13.208L8.542 11.417L6.833 14.375L10.542 17.167Q10.375 17.917 10.271 18.583Q10.167 19.25 10.167 19.917Q10.167 20.583 10.271 21.271Q10.375 21.958 10.542 22.792L6.833 25.583L8.5 28.542L12.792 26.667Q13.875 27.75 15.083 28.438Q16.292 29.125 17.667 29.458Z" />
                  </svg>
                </a>
              </Link>
              <Link href="/">
                <a className="ease-in duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40"
                    className="fill-white scale-50 hover:fill-theme-yellow ease-in duration-200 mx-1"
                    width="40"
                  >
                    <path d="M18.375 28.792H21.875V18.333H18.375ZM20 14.708Q20.75 14.708 21.25 14.229Q21.75 13.75 21.75 13Q21.75 12.208 21.25 11.708Q20.75 11.208 20 11.208Q19.25 11.208 18.75 11.708Q18.25 12.208 18.25 12.958Q18.25 13.708 18.75 14.208Q19.25 14.708 20 14.708ZM20 37.542Q16.333 37.542 13.104 36.188Q9.875 34.833 7.521 32.479Q5.167 30.125 3.812 26.896Q2.458 23.667 2.458 20Q2.458 16.333 3.812 13.104Q5.167 9.875 7.542 7.521Q9.917 5.167 13.125 3.813Q16.333 2.458 20 2.458Q23.667 2.458 26.896 3.813Q30.125 5.167 32.479 7.521Q34.833 9.875 36.188 13.104Q37.542 16.333 37.542 20Q37.542 23.708 36.188 26.896Q34.833 30.083 32.479 32.458Q30.125 34.833 26.896 36.188Q23.667 37.542 20 37.542ZM20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20ZM20 34.042Q25.792 34.042 29.917 29.938Q34.042 25.833 34.042 20Q34.042 14.208 29.917 10.083Q25.792 5.958 20 5.958Q14.167 5.958 10.062 10.083Q5.958 14.208 5.958 20Q5.958 25.833 10.062 29.938Q14.167 34.042 20 34.042Z" />
                  </svg>
                </a>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}
