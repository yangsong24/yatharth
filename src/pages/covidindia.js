import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig, siteUrl  } from '@config';
import { Layout } from '@components';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';

const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)`
 & > header {
    text-align: center;
    margin-bottom: 100px;}
    align-items:center;
`;
const StyledTableContainer = styled.div`
  margin: 100px -20px;
  align-items: flex-start;
  ${media.tablet`
    margin: 100px -10px;
  `};
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  .hide-on-mobile {
    ${media.tablet`
      display: none;
    `};
  }

  tbody tr {
    transition: ${theme.transition};

    &:hover,
    &:focus {
      background-color: ${colors.lightNavy};
    }
  }
  th,
  td {
    cursor: default;
    line-height: 1.5;
    padding: 10px 20px;
    ${media.tablet`
      padding: 10px;
    `};
  }
  th {
    text-align: left;
  }

`;

const ArchivePage = ({ location, data }) => {
  //const projects = data.allMarkdownRemark.edges;

  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet>
        <title>Covid-19 India DASHBOARD | Yatharth Bansal</title>
        <link rel="canonical" href= {`${siteUrl}`} />
      </Helmet>
.
      <StyledMainContainer>
        <header ref={revealTitle}>
          <h1 className="big-title">COVID-19 INDIA DASHBOARD</h1>
          <p className="subtitle">Covid-19 analysis of India on a daily basis. (Service deprecated as of now.)</p>
             <iframe width="1024" height="804" src="https://app.powerbi.com/view?r=eyJrIjoiNGQ5YWRiNzYtODEwNS00YmMzLTg1OGEtZmI3N2UxNzM4NjgzIiwidCI6ImQ5MjM1MjY5LTgwNDAtNGQ4NS05MzIxLTAxNmZkNTEzYzIwNiJ9&pageName=ReportSectionb3beab5f5e4e00e94a25" frameborder="100" allowFullScreen="true"></iframe>

        </header>
        <p> Dashboard deprecated as of now due to <a href={"https://blog.covid19india.org/2021/08/07/end/"}>covid19india API walking into sunset</a> .</p>
        <p> Data has been sourced from covid19indiaapi and data is based upon a one day lag. </p>
        <p> Data visualization shows daily cases, confirmed cases, and analysis of vaccination statewise, and the impact of immunization on India.</p>
        <p> If any questions regarding data, please feel free to contact me and if you like what I do, show some support by Buy me coffee.</p>
        
</StyledMainContainer>

    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;
