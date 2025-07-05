import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import './ContentDetails.css'; // Import the CSS file

const contentLinks = {
  'Probability & Statistics':{
    'Institute Material':[
      {
        title: 'Introduction to Electrical Engineering Concepts',
        view: 'https://drive.google.com/file/d/1tEZeGKOPsl9cZROldpKDm3yVzCLbSAK3/view',
        download: 'https://drive.google.com/uc?export=download&id=1tEZeGKOPsl9cZROldpKDm3yVzCLbSAK3',
      },
    ],
    // 'Mid Papers':[
    //   {
    //     title: 'Introduction to Electrical Engineering Concepts',
    //     view: 'https://drive.google.com/file/d/1tEZeGKOPsl9cZROldpKDm3yVzCLbSAK3/view',
    //     download: 'https://drive.google.com/uc?export=download&id=1tEZeGKOPsl9cZROldpKDm3yVzCLbSAK3',
    //   },
    // ],
    // 'End Sem Papers':[
    //   {
    //     title: 'Introduction to Electrical Engineering Concepts',
    //     view: 'https://drive.google.com/file/d/1tEZeGKOPsl9cZROldpKDm3yVzCLbSAK3/view',
    //     download: 'https://drive.google.com/uc?export=download&id=1tEZeGKOPsl9cZROldpKDm3yVzCLbSAK3',
    //   },
    // ],

  },
  'Basics of Electrical & Electronic Engineering': {
    'Institute Material': [
      {
        title: 'Folder Link',
        view: 'https://drive.google.com/drive/folders/1gnEAkfbfYB0Hp9gyPoLa1XmNT_ezACyC?usp=sharing',
        download: 'https://drive.google.com/drive/folders/1gnEAkfbfYB0Hp9gyPoLa1XmNT_ezACyC?usp=sharing',
      },
      // Add more PDFs as needed
    ],
    'Mid Papers': [
      {
        title: 'Mid Term Paper 1',
        view: 'https://drive.google.com/file/d/yourfileid2/view',
        download: 'https://drive.google.com/uc?export=download&id=yourfileid2',
      },
      // Add more PDFs as needed
    ],
    // 'End Sem Papers': [
    //   {
    //     title: 'End Sem Paper 1',
    //     view: 'https://drive.google.com/file/d/yourfileid3/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid3',
    //   },
    //   // Add more PDFs as needed
    // ],
    // Notes: [
    //   {
    //     title: 'Introduction to Electrical Engineering',
    //     view: 'https://drive.google.com/file/d/yourfileid4/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid4',
    //   },
    //   {
    //     title: 'Basic Electronics',
    //     view: 'https://drive.google.com/file/d/yourfileid5/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid5',
    //   },
    //   // Add more PDFs as needed
    // ],
  },
  'Physics': {
    'Institute Material': [
      {
        title: 'Folder Link',
        view: 'https://drive.google.com/drive/folders/1LGL6yYS9iytxtKSQWhZTbeV5LIY4JRFN?usp=sharing',
        download: 'https://drive.google.com/drive/folders/1LGL6yYS9iytxtKSQWhZTbeV5LIY4JRFN?usp=sharing',
      },
      // Add more PDFs as needed
    ],
    'Mid Papers': [
      {
        title: 'Paper 1',
        view: 'https://drive.google.com/file/d/1S9lJp6spfaE0-HB069yYtho1o4JAwhy8/view',
        download: 'https://drive.google.com/uc?export=download&id=1S9lJp6spfaE0-HB069yYtho1o4JAwhy8',
      },
      {
        title: 'Paper 2',
        view: 'https://drive.google.com/file/d/1bZRS5LCXVECqhoONmgra_R8BT6BCixy0/view',
        download: 'https://drive.google.com/uc?export=download&id=1bZRS5LCXVECqhoONmgra_R8BT6BCixy0',
      },
      {
        title: 'Paper 3',
        view: 'https://drive.google.com/file/d/168xoIPH-0aNb8pnQrQIEWPaxO_hW8Xww/view',
        download: 'https://drive.google.com/uc?export=download&id=168xoIPH-0aNb8pnQrQIEWPaxO_hW8Xww',
      },
      {
        title: 'Paper 4',
        view: 'https://drive.google.com/file/d/1IEmouiOkwk_yg-ksmArI4LvuDjClx3Cp/view',
        download: 'https://drive.google.com/uc?export=download&id=1IEmouiOkwk_yg-ksmArI4LvuDjClx3Cp',
      },
      // Add more PDFs as needed
    ],
    'End Sem Papers': [
      {
        title: 'End Sem Paper 1',
        view: 'https://drive.google.com/file/d/yourfileid8/view',
        download: 'https://drive.google.com/uc?export=download&id=yourfileid8',
      },
      // Add more PDFs as needed
    ],
    Notes: [
      {
        title: 'Mechanics',
        view: 'https://drive.google.com/file/d/yourfileid9/view',
        download: 'https://drive.google.com/uc?export=download&id=yourfileid9',
      },
      {
        title: 'Optics',
        view: 'https://drive.google.com/file/d/yourfileid10/view',
        download: 'https://drive.google.com/uc?export=download&id=yourfileid10',
      },
      // Add more PDFs as needed
    ],
  },
  'Computer Programming': {
    'Institute Material': [
      {
        title: 'Folder - Complete PDFs ',
        view: 'https://drive.google.com/drive/folders/1GOZtQjz9OtbTFLy83GXbedpMk2rNzjc2?usp=sharing',
        download: 'https://drive.google.com/drive/folders/1GOZtQjz9OtbTFLy83GXbedpMk2rNzjc2?usp=sharing',
      },
      // Add more PDFs as needed
    ],
    'Mid Papers': [
      {
        title: 'Mid Term Paper 1',
        view: 'https://drive.google.com/file/d/1B5VV8JJXW14tL1I5iWVH-l9f6VBHMxjL/view',
        download: 'https://drive.google.com/uc?export=download&id=1B5VV8JJXW14tL1I5iWVH-l9f6VBHMxjL',
      },
      {
        title: 'Assignment (Must Do)',
        view: 'https://drive.google.com/file/d/1VnpLJO5B5waF5FQJtPqytZewDOZ7IMQi/view?usp=drive_link',
        download: 'https://drive.google.com/file/d/1VnpLJO5B5waF5FQJtPqytZewDOZ7IMQi/view?usp=drive_link',
      },
      // Add more PDFs as needed
    ],
    'End Sem Papers': [
      {
        title: 'End Sem Paper 2023',
        view: 'https://drive.google.com/file/d/1xPsM_Tvb2udY_kNVNWFp1inavAIzquo4/view',
        download: 'https://drive.google.com/uc?export=download&id=1xPsM_Tvb2udY_kNVNWFp1inavAIzquo4',
      },
      {
        title: 'Paper 2',
        view: 'https://drive.google.com/file/d/1WgtYkt3W4C6BQ6FKGEFrNLCBmTf77jJH/view',
        download: 'https://drive.google.com/uc?export=download&id=1WgtYkt3W4C6BQ6FKGEFrNLCBmTf77jJH',
      },
      // Add more PDFs as needed
    ],
   
    // Notes: [
    //   {
    //     title: 'Introduction to Programming',
    //     view: 'https://drive.google.com/file/d/yourfileid14/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid14',
    //   },
    //   {
    //     title: 'Programming Basics',
    //     view: 'https://drive.google.com/file/d/yourfileid15/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid15',
    //   },
    //   // Add more PDFs as needed
    // ],
  },
  'Advance Java Technology': {
    'Institute Material': [
      {
        title: 'Unit 1',
        view: 'https://drive.google.com/file/d/124MMYMWIqfyAuwh0ZN3ruwdE5QaOI4KX/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=124MMYMWIqfyAuwh0ZN3ruwdE5QaOI4KX',
      },
      {
        title: 'Unit 2',
        view: 'https://drive.google.com/file/d/1IAjVHb94LEzHcicnhz3_xkmJCibihU3c/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=1IAjVHb94LEzHcicnhz3_xkmJCibihU3c',
      },
      // Add more PDFs as needed
    ],
    'Mid Papers': [
      {
        title: 'Mid Term Paper 1',
        view: 'https://drive.google.com/file/d/yourfileid17/view',
        download: 'https://drive.google.com/uc?export=download&id=yourfileid17',
      },
      // Add more PDFs as needed
    ],
    'End Sem Papers': [
      {
        title: 'End Sem Paper 1',
        view: 'https://drive.google.com/file/d/1M7BEKekJ5EDwNVxGWRB7JM6cJxvpy6tF/view',
        download: 'https://drive.google.com/uc?export=download&id=1M7BEKekJ5EDwNVxGWRB7JM6cJxvpy6tF',
      },
      // Add more PDFs as needed
    ],
    Notes: [
      {
        title: 'Hand Written Notes',
        view: 'https://drive.google.com/file/d/12rT02P6-bi4gtY32FCcIPcZc2muP_X5F/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=12rT02P6-bi4gtY32FCcIPcZc2muP_X5F',
      },
    
      // Add more PDFs as needed
    ],
  },
  'Database Management System': {
    Notes: [
      {
        title: 'Complete Notes by Darshan University',
        view: 'https://drive.google.com/file/d/194KFERr5_ONJ44vwCEbMcNzU3ZteMUMM/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=194KFERr5_ONJ44vwCEbMcNzU3ZteMUMM',
      },
     
      // Add more PDFs as needed
    ],
    'Institute Material':[ 
      {
        title: 'Complete Notes by Darshan University',
        view: 'https://drive.google.com/file/d/194KFERr5_ONJ44vwCEbMcNzU3ZteMUMM/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=194KFERr5_ONJ44vwCEbMcNzU3ZteMUMM',
      },
    {
        title: 'Unit 1',
        view: 'https://drive.google.com/file/d/1r44AEUoNuQZ7DMXwdMKEAJvWsFK-n110/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=1r44AEUoNuQZ7DMXwdMKEAJvWsFK-n110',
      },
      {
        title: 'Unit 2 part 1',
        view: 'https://drive.google.com/file/d/1Rn35d3vAYojhaqCooPpORg8Ska_o78KQ/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=1Rn35d3vAYojhaqCooPpORg8Ska_o78KQ',
      },
      {
        title: 'Unit 2 part 2',
        view: 'https://drive.google.com/file/d/1GqHCeGzGI_Ez0CjsGLe-zsR83SEF6UBb/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=1GqHCeGzGI_Ez0CjsGLe-zsR83SEF6UBb',
      },
      {
        title: 'Unit 3',
        view: 'https://drive.google.com/file/d/1QC1t0LBFYBW2K_cI41Ik9jf78fiuCnHv/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=1QC1t0LBFYBW2K_cI41Ik9jf78fiuCnHv',
      },
      {
        title: 'Unit 4',
        view: 'https://drive.google.com/file/d/1Fsi4I14bKYX8Pv2WvC9lPSjpwl66z7A8/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=1Fsi4I14bKYX8Pv2WvC9lPSjpwl66z7A8',
      },
      {
        title: 'Unit 6',
        view: 'https://drive.google.com/file/d/1L8doIWQOu6Vj2wUVLKElMR2RsoMlVPm-/view?usp=drive_link',
        download: 'https://drive.google.com/uc?export=download&id=1L8doIWQOu6Vj2wUVLKElMR2RsoMlVPm-',
      },
    ],
    'Mid Papers': [
      {
        title: 'November 2021 ',
        view: 'https://drive.google.com/file/d/1kDQVJ0gu5mwamskfajvIePCeUSx_Umf1/view',
        download: 'https://drive.google.com/uc?export=download&id=1kDQVJ0gu5mwamskfajvIePCeUSx_Umf1',
        // https://drive.google.com/file/d/1kDQVJ0gu5mwamskfajvIePCeUSx_Umf1/view?usp=drive_link
      },
      // Add more PDFs as needed
    ],
    'End Sem Papers': [
      {
        title: '2023',
        view: 'https://drive.google.com/file/d/1YwwnB0gHVuj_fzwypQT-zjNchHZBYtUh/view',
        download: 'https://drive.google.com/uc?export=download&id=1YwwnB0gHVuj_fzwypQT-zjNchHZBYtUh',
        // https://drive.google.com/file/d/1YwwnB0gHVuj_fzwypQT-zjNchHZBYtUh/view?usp=sharing
      },
      {
        title: '2019',
        view: 'https://drive.google.com/file/d/1R3GJtlFyE7cUO51LeVNJqLZDA32T61t9/view',
        download: 'https://drive.google.com/uc?export=download&id=1R3GJtlFyE7cUO51LeVNJqLZDA32T61t9',
        // https://drive.google.com/file/d/1R3GJtlFyE7cUO51LeVNJqLZDA32T61t9/view?usp=sharing
        },
    
      // Add more PDFs as needed
    ],
   
  },
  'Web Technology': {
    // 'Institute Material': [
    //   {
    //     title: 'Computer Science Basics',
    //     view: 'https://drive.google.com/file/d/yourfileid26/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid26',
    //   },
    //   // Add more PDFs as needed
    // ],
    'Mid Papers': [
      {
        title: 'Mid Term Paper 1',
        view: 'https://drive.google.com/file/d/1WaeMKLDA8dAQI2H4I6m3wplbQ9n5ecsR/view',
        download: 'https://drive.google.com/uc?export=download&id=1WaeMKLDA8dAQI2H4I6m3wplbQ9n5ecsR',
      },
      // Add more PDFs as needed
    ],
    // 'End Sem Papers': [
    //   {
    //     title: 'End Sem Paper 1',
    //     view: 'https://drive.google.com/file/d/yourfileid28/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid28',
    //   },
      // Add more PDFs as needed
    // ],
    // Notes: [
    //   {
    //     title: 'Introduction to Computer Science',
    //     view: 'https://drive.google.com/file/d/yourfileid29/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid29',
    //   },
    //   {
    //     title: 'Programming Concepts',
    //     view: 'https://drive.google.com/file/d/yourfileid30/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfile',
    //   },
    //   // Add more PDFs as needed
    // ],
    // Add more content types and their PDFs here
  },
  '.NET Technologies': {
    'Mid Papers': [
      {
        title: 'Paper 1',
        view: 'https://drive.google.com/file/d/1NlWZ6lhR7GycLQK48Zw0cfPF9A5pSso2/view',
        download: 'https://drive.google.com/uc?export=download&id=1NlWZ6lhR7GycLQK48Zw0cfPF9A5pSso2',
      },
      // Add more PDFs as needed
    ],
    'End Sem Papers': [
      {
        title: 'Paper 1',
        view: 'https://drive.google.com/file/d/12SaiDI_2oFLpALlRP0f3UgaYj_GXQSuF/view',
        download: 'https://drive.google.com/uc?export=download&id=12SaiDI_2oFLpALlRP0f3UgaYj_GXQSuF',
      },
      // Add more PDFs as needed
    ],
    // Notes: [
    //   {
    //     title: 'Introduction to Computer Science',
    //     view: 'https://drive.google.com/file/d/yourfileid29/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfileid29',
    //   },
    //   {
    //     title: 'Programming Concepts',
    //     view: 'https://drive.google.com/file/d/yourfileid30/view',
    //     download: 'https://drive.google.com/uc?export=download&id=yourfile',
    //   },
    //   // Add more PDFs as needed
    // ],
    // Add more content types and their PDFs here
  },  
  'Data Structures': {
    'Institute Material': [
      {
        title: 'All Unit Notes by Darshan',
        view: 'https://drive.google.com/file/d/1kksvRxZkEmo7U-qTDx8Tu1GjVFm50Nka/view',
        download: 'https://drive.google.com/uc?export=download&id=1kksvRxZkEmo7U-qTDx8Tu1GjVFm50Nka',
      },
      // Add more PDFs as needed
    ],
    'Mid Papers': [
      {
        title: 'Mid Term Paper 1',
        view: 'https://drive.google.com/file/d/1kDQVJ0gu5mwamskfajvIePCeUSx_Umf1/view',
        download: 'https://drive.google.com/uc?export=download&id=1kDQVJ0gu5mwamskfajvIePCeUSx_Umf1',
      },
      // Add more PDFs as needed
    ],
    'End Sem Papers': [
      {
        title: 'End Sem Paper 1',
        view: 'https://drive.google.com/file/d/157W7wH0rIgh6ys5IvcvdxPyhstH08R0h/view',
        download: 'https://drive.google.com/uc?export=download&id=157W7wH0rIgh6ys5IvcvdxPyhstH08R0h',
      },
      {
        title: 'End Sem Paper 2',
        view: 'https://drive.google.com/file/d/1AzE9jsDrzfnLSO35r8ZA2IO28rfqG44x/view',
        download: 'https://drive.google.com/uc?export=download&id=1AzE9jsDrzfnLSO35r8ZA2IO28rfqG44x',
      },
      // Add more PDFs as needed
    ],
    Notes: [
      {
        title: 'Complete Notes',
        view: 'https://drive.google.com/file/d/1kksvRxZkEmo7U-qTDx8Tu1GjVFm50Nka/view',
        download: 'https://drive.google.com/uc?export=download&id=1kksvRxZkEmo7U-qTDx8Tu1GjVFm50Nka',
      },
    
      // Add more PDFs as needed
    ],

  },
    'Fundamentals of Microprocessors': {
    
    'Mid Papers': [
      {
        title: 'Mid Term Paper 1',
        view: 'https://drive.google.com/file/d/1IIPNqMoBQpiiyD0xUge3xk-QiijpXaN8/view',
        download: 'https://drive.google.com/uc?export=download&id=1IIPNqMoBQpiiyD0xUge3xk-QiijpXaN8',
      },
      // Add more PDFs as needed
    ],
    'End Sem Papers': [
      {
        title: 'End Sem Paper 1',
        view: 'https://drive.google.com/file/d/1E7OOdnLfjiYmLtqeg876N4LGupYlGTpJ/view',
        download: 'https://drive.google.com/uc?export=download&id=1E7OOdnLfjiYmLtqeg876N4LGupYlGTpJ',
      },
      {
        title: 'End Sem Paper 2',
        view: 'https://drive.google.com/file/d/1SkYyfarms7PLTsPOyUbDNeCXtfM75jJo/view',
        download: 'https://drive.google.com/uc?export=download&id=1SkYyfarms7PLTsPOyUbDNeCXtfM75jJo',
      },
      // Add more PDFs as needed
    ],
    Notes: [
      {
        title: 'Complete Notes',
        view: 'https://drive.google.com/file/d/1kksvRxZkEmo7U-qTDx8Tu1GjVFm50Nka/view',
        download: 'https://drive.google.com/uc?export=download&id=1kksvRxZkEmo7U-qTDx8Tu1GjVFm50Nka',
      },
    
      // Add more PDFs as needed
    ],
    // Add more content types and their PDFs here
  },
  // Add more subjects and their content links here
};

const ContentDetails = () => {
  const { semester, subject, contentType } = useParams();
  const content = contentLinks[subject]?.[contentType] || [];

  return (
    <div className="content-details-page">
      <h1>{contentType} for {subject}</h1>
      <div className="content-details-list">
        {content.length > 0 ? (
          content.map((item, index) => (
            <div key={index} className="content-item">
              <span className="content-title">{item.title}</span>
              <div className="content-item-actions">
                <a href={item.view} target="_blank" rel="noopener noreferrer">
                  <button className="content-action-button view-button">View PDF</button>
                </a>
                <a href={item.download} target="_blank" rel="noopener noreferrer">
                  <button className="content-action-button download-button">Download PDF</button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No content available for this option.</p>
        )}
      </div>
    </div>
  );
};

export default ContentDetails;
