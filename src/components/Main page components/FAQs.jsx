import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const FAQs = ({ faqdata }) => {
    // const [expanded, setExpanded] = useState('panel1');
  
    // const handleChange = (panel) => (event, newExpanded) => {
    //   setExpanded(newExpanded ? panel : false);}


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
    <div className="flex items-center justify-center my-5">
      <div className="w-[89%] md:w-[95%] flex flex-col md:flex-row">
        <div className="left">
          <div className="heading">FAQs</div>
          <p>
            Can’t find the answer you’re looking for? Reach out to our support
            team
          </p>
        </div>
        <ul>
          {faqdata &&
            faqdata.map((item, index) => (
              <li key={index}>
                <div>
                  <div>
                    <div
                      className="question z-10"
                      dangerouslySetInnerHTML={{ __html: item.question }}
                    />
                    <div className="button" onClick={() => handleClick(index)}>
                      click
                    </div>
                  </div>
                  <div
                    className={`${
                      expanded && expandId === index
                        ? "answer max-h-[3rem]"
                        : "h-[0px] text-white"
                    } transition-all duration-200`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
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
