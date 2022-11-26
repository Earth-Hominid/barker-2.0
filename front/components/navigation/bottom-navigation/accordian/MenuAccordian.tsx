import React, { useState } from 'react';
import AccordianContent from './AccordianContent';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import {
  AccordianContainer,
  AccordianSummary,
  SummaryTitle,
  AccordianText,
  IconHolder,
} from './Styles';

interface DatapointInterface {
  id: string;
  url: string;
  name: string;
}

interface Props {
  props: {
    title: string;
    datapoints: Array<DatapointInterface>;
  };
}

const MenuAccordian: React.FC<Props> = ({ props }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleAccordianClick = () => {
    if (!accordianOpen) {
      setAccordianOpen(true);
    } else {
      setAccordianOpen(false);
    }
  };

  return (
    <AccordianContainer>
      <details>
        <AccordianSummary onClick={handleAccordianClick}>
          <SummaryTitle>{props.title}</SummaryTitle>
          {accordianOpen ? (
            <IconHolder>
              <ChevronDownIcon />
            </IconHolder>
          ) : (
            <IconHolder>
              <ChevronRightIcon />
            </IconHolder>
          )}
        </AccordianSummary>
        <AccordianContent props={props} />
      </details>
    </AccordianContainer>
  );
};

export default MenuAccordian;
