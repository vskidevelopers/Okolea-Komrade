import React from "react";
import LeftTimeline from "../components/LeftTimeline";
import RightTimeline from "../components/RightTimeline";

function HowItWorks() {
  return (
    <div>
      <div className="bg-gray-200 mx-auto pt-20 w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: "50%" }}
          ></div>

          {/* timelines */}
          <RightTimeline
            number={1}
            title="Registration"
            description="Job seekers and employers create accounts on the platform by providing their personal information, such as name, email address, and phone number."
          />
          <LeftTimeline
            number={2}
            title="Profile Creation"
            description="Job seekers create a profile that includes their resume, education, work experience, and other relevant details. Employers create a company profile that includes their description, logo, and other relevant details."
          />
          <RightTimeline
            number={3}
            title="Job Posting"
            description="Employers can create job postings on the platform that include the job title, job description, required qualifications, and other relevant information."
          />
          <LeftTimeline
            number={4}
            title="Job Search"
            description="Job seekers can search for job openings by using keywords, location, industry, job type, and other filters."
          />
          <RightTimeline
            number={5}
            title="Application"
            description="Job seekers can apply to the job openings they are interested in by submitting their application through the platform. This can include uploading their resume and cover letter, answering screening questions, and taking assessments."
          />
          <LeftTimeline
            number={6}
            title="Screening"
            description="Employers can screen the applications they receive by reviewing resumes, cover letters, and other application materials. They can also use assessments and screening questions to filter out unqualified candidates."
          />
          <RightTimeline
            number={7}
            title="Selection:"
            description="After the interviews are conducted, employers can select the candidate they want to hire. They can extend the job offer through the platform and negotiate the terms of the offer."
          />
          <LeftTimeline
            number={8}
            title="Payment"
            description="The platform may charge employers a fee for using their services, such as a percentage of the employee's salary. The platform may also offer additional services, such as background checks and payroll management."
          />

          {/* <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Registration
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Lorem Ipsum
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
