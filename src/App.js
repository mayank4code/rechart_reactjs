import React, { useEffect } from "react";

import { FiDownload, FiBarChart2 } from 'react-icons/fi';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';


import Graph from "./components/Graph";
import PieChart from "./components/PieChart";
import RadialBarChartComponent from './components/RadialBarChart';
import './App.css';

// import { UserData } from "./Data";

//? Language Functionality Starts ............................................................

import i18n, { changeLanguage } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import tEn from './locales/en/translation.json';
import tHi from './locales/hi/translation.json';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: tEn
      },
      hi: {
        translation: tHi
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

  const changeLang = (l)=>{
    return ()=>{
      i18n.changeLanguage(l);

      //* Now saving current language on LocalStorage
      localStorage.setItem('lang' , l );
    }

  };

function App() {
  const { t } = useTranslation();

  useEffect(()=>{
    let currentLang = localStorage.getItem('lang');
    i18n.changeLanguage(currentLang);

  },[]);


//? Language Functionality Ends .............................................

  
//   return (
//     <>
//       <h1>{t('greeting')}</h1>
//       <h2>{t('welcome_to_react')}</h2>

//       <button onClick = {changeLang('en')}>English</button>
//       <button onClick = {changeLang('hi')}>Hindi</button>


//     </>
//     );
// }


// function App() {

  const userId = 2 ;// Set the userId here
  const pdfRef =useRef() ;

  const handleDownloadClick= ()=> {
    console.log ("Download Start .");

    const input = pdfRef.current ;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio= Math.min(pdfWidth/imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY= 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Result.pdf');
    });
  };

  return (

    <>
            <div className="result-page" ref={pdfRef}>
                <div className="language-buttons">
                    <button className="language-button" onClick = {changeLang('en')}>
                        English
                    </button>
                    <button className="language-button" onClick = {changeLang('hi')}>
                        हिन्दी
                    </button>
                    {/* Add more buttons for other languages */}
                </div>
                <div className="header">
                <h2 className="page-heading" >
                <FiBarChart2 className="icon-bar-chart my-5" /> {t('main_heading1')}
                </h2>
               
                <button className="download-button" onClick={handleDownloadClick}>
                        <FiDownload className="download-icon" />
                        {t('download')}
                </button>
                </div>
                
                <div className='chart-section'>
                    <div className="chart">
                        <h1>{t('graph_heading')}</h1>
                        <h4 className="chart-subtitle">{t('graph_sub_heading')}</h4>
                        <Graph userId={userId} />
                    </div>
                    <div className="chart">
                        <h1>{t('piechart_heading')}</h1>
                        <h4 className="chart-subtitle">{t('piechart_sub_heading')}</h4>
                        <PieChart userId={userId} />
                    </div>
                    <div className="chart">
                        <h1>{t('radialbarchart_heading')}</h1>
                        <RadialBarChartComponent userId={userId} />
                    </div>
                </div>
                <div className="content-section">
                    <h3 style={{color:"#1D5B79"}}>{t('main_heading2')}</h3>
                    <p>
                    {t('main_heading2_content1')} <b>{Date.now}</b> {t('main_heading2_content2')}
                    </p>
                    <h3 style={{color:"#1D5B79"}}>{t('graph_text_heading')}</h3>
                    <p>
                        {t('graph_text_content')}    
                    </p>

                    <h3 style={{color:"#1D5B79"}}> {t('piechart_text_heading')}</h3>
                    <p>
                        {t('piechart_text_content')}   
                    </p>
                    <h3 style={{color:"#1D5B79"}}>{t('radialbarchart_text_heading')}</h3>
                    <p>
                        {t('radialbarchart_text_content')}    
                    </p>
                    {/* ... Add more content about the test results as needed ... */}
                </div>

            </div>
    </>
    );
  }

export default App;



/*

            <div className='row'>
                <div className="col form-outline mb-3 formInput ">
                    
                </div>
                <div className="col form-outline mb-3 formInput ">

                </div>
            </div>


*/