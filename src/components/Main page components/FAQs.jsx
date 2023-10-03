import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQs = ({ faqdata }) => {
  const [expanded, setExpanded] = useState(false);
  const [expandId, setExpandId] = useState(null);

  const handleClick = function (id) {
    if (expandId === id && expanded === true) {
      setExpanded(false);
      setExpandId(null);
      return;
    }
    setExpanded(true);
    setExpandId(id);
  };

  return (
    <div className="flex items-center justify-center pt-10 pb-10 bg-slate-50">
      <div className="w-[89%] md:w-[95%] flex flex-col md:flex-row justify-between lg:justify-evenly ">
        <div className="left md:w-[23%] py-3">
          <div className="heading font-semibold text-xl">FAQs</div>
          <p>
            Can’t find the answer you’re looking for? Reach out to our support
            team
          </p>
        </div>
        <ul className="md:w-[60%]">
          {faqdata &&
            faqdata.map((item, index) => (
              <li
                key={index}
                className={`py-5 ${
                  faqdata.length - 1 !== index ? "border-b-[1.5px]" : ""
                } `}
              >
                <div>
                  <div>
                    <div
                      className="flex cursor-pointer items-center justify-between"
                      onClick={() => handleClick(index)}
                    >
                      <div
                        className="question font-semibold text-[#475569]"
                        dangerouslySetInnerHTML={{ __html: item.question }}
                      />
                      <IoIosArrowDown />
                    </div>
                  </div>
                  <div
                    className={`${
                      expanded && expandId === index
                        ? "answer h-auto py-4"
                        : "h-[0px]"
                    } transition-all duration-300`}
                  >
                    <div
                      className={`${
                        expanded && expandId === index ? "" : " opacity-0"
                      } transition-all duration-[1000] text-[#475569]`}
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>

    // <div>
    //   <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    //     <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    //       <Typography>Collapsible Group Item #1</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
    //         sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    //         sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
    //     <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    //       <Typography>Collapsible Group Item #2</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
    //         sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    //         sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    //     <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    //       <Typography>Collapsible Group Item #3</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
    //         sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    //         sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    // </div>
  );
};

export default FAQs;
