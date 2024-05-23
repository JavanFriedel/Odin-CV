import React, { useState } from 'react';

const defaultParams = {
  title: 'Software Engineer',
  name: 'Javan Friedel',
  description:
    'As a seasoned web developer, I bring a dynamic blend of creativity and technical expertise to crafting immersive online experiences.',
  workExperience: `Lead Programmer
Web Comapny | Sept 2017 - Present
     - Managed all operations for a team of 5. 
     - Architected the main product for company
     - Other Points
     - Other Points
  
Lead Programmer
Other Company | Sept 2015 - 2017
     - Point 1
     - Point 2
     - Point 3
     - Point 4`,
  education: `DIPLOMA OF BUSINESS ADMINISTRATION
School Name | 2013 - 2015
  
DIPLOMA OF INTERACTIVE MEDIA AND DESIGN
School Name | 2015 - 2017
  
CS50X WEB - WEB PROGRAMMING WITH PYTHON & JAVASCRIPT
Harvard Unniversity | 2016`,
  phoneNumber: '555-555-5555',
  email: 'javanfriedel@hotmail.com',
  skills: ` Programming Languages
  - HTML5 (aria standards)
  - CSS (incl. Tailwind)
  - JavaScript (incl. React)
  - C++
  
  Design Tools
   - Figma
   - Adobe Suite
  
  Other Notable Skills
   - Git Version Control
   - CI / CD Workflows
   - Self Hosted Expertise`,
  personalSkills: `  Competitive
  Adaptive Learner
  Motivated
  Outgoing Personality
  Time Management
  Punctuality`,
  contact: ` P: +1 555 555 5555
 E: javanfriedel@mail.com`,
  social: ` Github: javanfriedel
 LinkedIn: javanfriedel`,
  languages: ` English`,
};

type ResumeKey = keyof typeof defaultParams;

export default function App() {
  const [resumeData, setResumeData] = useState(defaultParams);
  const [isEditing, setIsEditing] = useState(true);

  function handleDataChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    dataKey: ResumeKey
  ) {
    const resumeKey: ResumeKey = dataKey;
    const input = e.target.value;

    // Double Check that the key exists in the object

    setResumeData({ ...resumeData, [resumeKey]: input });
  }

  return (
    <div className="flex m-auto gap-6 mt-6 max-w-[920px] justify-center print:w-full print:h-100vh print:mt-0 print:absolute print:top-0 print:bottom-0">
      <div className="h-[279mm] w-[216mm] flex-grow p-2 gap-6 border-neutral-600 border overflow-hidden flex flex-col print:h-full print:w-full">
        <div className="relative h-40">
          <div className="bg-[#D9D9D9] h-[2000px] w-[190px] absolute top-[-10px] left-[-8px] shadow-xl z-0"></div>
          <div className="bg-[#1FCAFF] h-64 w-[1000px] absolute top-[-150px] left-[-300px] rotate-[-15deg] shadow-xl"></div>
          <div className="bg-[#0992BD] h-64 w-[1000px] absolute top-[-155px] left-0 rotate-[9deg] shadow-xl"></div>
          <div className="bg-[#18ABDA] h-64 w-[1000px] absolute top-[-190px] left-[-300px] rotate-[-22deg] shadow-xl"></div>
          <div className="bg-[#00A5D9] h-64 w-[1000px] absolute top-[-190px] left-0 rotate-[16deg] shadow-xl"></div>
        </div>
        <div className="flex h-full gap-8 z-10">
          <div className="w-44 pt-8 font-semibold flex flex-col items-start gap-6">
            <div className="w-full">
              <h5 className="text-neutral-600 text-sm">PROFESSIONAL SKILLS</h5>
              {isEditing ? (
                <textarea
                  value={resumeData.skills}
                  onChange={(e) => handleDataChange(e, 'skills' as ResumeKey)}
                  className={`border-none font-normal bg-blue-200 p-0 h-72 text-sm w-full resize-none`}
                />
              ) : (
                // <div className={`border-none ${className}`}>{text}</div>
                <textarea
                  value={resumeData.skills}
                  disabled
                  // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
                  className={`border-none font-normal p-0 disabled:bg-transparent text-neutral-500 text-sm h-72 w-full resize-none`}
                />
              )}
            </div>
            <div className="w-full">
              <h5 className="text-neutral-600 text-sm">PERSONAL SKILLS</h5>
              {isEditing ? (
                <textarea
                  value={resumeData.personalSkills}
                  onChange={(e) =>
                    handleDataChange(e, 'personalSkills' as ResumeKey)
                  }
                  className={`border-none font-normal bg-blue-200 p-0 h-32 text-sm w-full resize-none`}
                />
              ) : (
                // <div className={`border-none ${className}`}>{text}</div>
                <textarea
                  value={resumeData.personalSkills}
                  disabled
                  // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
                  className={`border-none font-normal p-0 disabled:bg-transparent text-neutral-500 text-sm h-32 w-full resize-none`}
                />
              )}
            </div>
            <div className="w-full">
              <h5 className="text-neutral-600 text-sm">LANGUAGES</h5>
              {isEditing ? (
                <textarea
                  value={resumeData.languages}
                  onChange={(e) =>
                    handleDataChange(e, 'languages' as ResumeKey)
                  }
                  className={`border-none font-normal bg-blue-200 p-0 h-10 text-sm w-full resize-none`}
                />
              ) : (
                // <div className={`border-none ${className}`}>{text}</div>
                <textarea
                  value={resumeData.languages}
                  disabled
                  // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
                  className={`border-none font-normal p-0 disabled:bg-transparent text-neutral-500 text-sm h-10 w-full resize-none`}
                />
              )}
            </div>
            <div className="w-full">
              <h5 className="text-neutral-600 text-sm">CONTACT</h5>
              {isEditing ? (
                <textarea
                  value={resumeData.contact}
                  onChange={(e) => handleDataChange(e, 'contact' as ResumeKey)}
                  className={`border-none font-normal bg-blue-200 p-0 h-12 text-sm w-full resize-none`}
                />
              ) : (
                // <div className={`border-none ${className}`}>{text}</div>
                <textarea
                  value={resumeData.contact}
                  disabled
                  // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
                  className={`border-none font-normal p-0 disabled:bg-transparent text-neutral-500 text-sm h-12 w-full resize-none`}
                />
              )}
            </div>
            <div className="w-full">
              <h5 className="text-neutral-600 text-sm">SOCIAL</h5>
              {isEditing ? (
                <textarea
                  value={resumeData.social}
                  onChange={(e) => handleDataChange(e, 'social' as ResumeKey)}
                  className={`border-none font-normal bg-blue-200 p-0 h-10 text-sm w-full resize-none`}
                />
              ) : (
                // <div className={`border-none ${className}`}>{text}</div>
                <textarea
                  value={resumeData.social}
                  disabled
                  // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
                  className={`border-none font-normal p-0 disabled:bg-transparent text-neutral-500 text-sm h-10 w-full resize-none`}
                />
              )}
            </div>
          </div>
          <div className="flex-auto flex flex-col">
            <div>
              <ToggleText
                text={resumeData.title}
                isEditing={isEditing}
                setResumeData={handleDataChange}
                dataKey="title"
                className="border-none text-neutral-500 text-sm w-full"
              />
            </div>
            <div>
              <ToggleText
                text={resumeData.name}
                isEditing={isEditing}
                setResumeData={handleDataChange}
                dataKey="name"
                className="text-2xl font-semibold w-full"
              />
            </div>
            <div className="pt-4">
              <h5 className="font-semibold text-[#00A5D9]">ABOUT</h5>
              {isEditing ? (
                <textarea
                  value={resumeData.description}
                  onChange={(e) =>
                    handleDataChange(e, 'description' as ResumeKey)
                  }
                  className={`border-none bg-blue-200 p-0 h-12 w-full resize-none`}
                />
              ) : (
                // <div className={`border-none ${className}`}>{text}</div>
                <textarea
                  value={resumeData.description}
                  disabled
                  // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
                  className={`border-none p-0 disabled:bg-transparent h-12 w-full resize-none`}
                />
              )}
            </div>
            <div className="w-full h-0.5 bg-neutral-400"></div>
            <div className="pt-4">
              <h5 className="font-semibold text-[#00A5D9]">WORK EXPERIENCE</h5>
              {isEditing ? (
                <textarea
                  value={resumeData.workExperience}
                  onChange={(e) =>
                    handleDataChange(e, 'workExperience' as ResumeKey)
                  }
                  className={`border-none bg-blue-200 p-0 h-80 w-full resize-none`}
                />
              ) : (
                // <div className={`border-none ${className}`}>{text}</div>
                <textarea
                  value={resumeData.workExperience}
                  disabled
                  // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
                  className={`border-none p-0 disabled:bg-transparent h-80 w-full resize-none`}
                />
              )}
            </div>
            <div className="w-full h-0.5 bg-neutral-400"></div>
            <div className="pt-4">
              <h5 className="font-semibold text-[#00A5D9]">EDUCATION</h5>
              {isEditing ? (
                <textarea
                  value={resumeData.education}
                  onChange={(e) =>
                    handleDataChange(e, 'education' as ResumeKey)
                  }
                  className={`border-none bg-blue-200 p-0 h-60 w-full resize-none`}
                />
              ) : (
                // <div className={`border-none ${className}`}>{text}</div>
                <textarea
                  value={resumeData.education}
                  disabled
                  // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
                  className={`border-none p-0 disabled:bg-transparent h-60 w-full resize-none`}
                />
              )}
            </div>
            {/* <ToggleText
              text={resumeData.email}
              isEditing={isEditing}
              setResumeData={handleDataChange}
              dataKey="email"
            />
            <ToggleText
              text={resumeData.phoneNumber}
              isEditing={isEditing}
              setResumeData={handleDataChange}
              dataKey="phoneNumber"
            /> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="bg-[#00A5D9] rounded-md p-2 w-20 print:hidden"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? (
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
              </svg>
            </div>
          ) : (
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
              </svg>
            </div>
          )}
        </button>
        <button
          className="bg-[#00A5D9] rounded-md p-2 w-20 print:hidden"
          onClick={() => window.print()}
        >
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function ToggleText({
  text,
  isEditing,
  setResumeData,
  dataKey,
  className,
}: {
  text: string;
  isEditing: boolean;
  setResumeData: (
    e: React.ChangeEvent<HTMLInputElement>,
    dataKey: ResumeKey
  ) => void;
  dataKey: string;
  className?: string;
}) {
  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
          className={`border-none m-0 bg-blue-200 p-0 ${className}`}
        />
      ) : (
        // <div className={`border-none ${className}`}>{text}</div>
        <input
          type="text"
          value={text}
          disabled
          // onChange={(e) => setResumeData(e, dataKey as ResumeKey)}
          className={`border-none m-0 p-0 disabled:bg-transparent ${className}`}
        />
      )}
    </>
  );
}
