import React, { FC } from "react";

import PageContainer from "components/PageContainer/PageContainer";
import ContentCard from "components/ContentCard/ContentCard";
import UsersTable from "components/UsersTable/UsersTable";

const LandingPage: FC = () => {
  return (
    <PageContainer>
      <h2 className="text-2xl md:text-4xl mb-4 font-sans">Landing page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <ContentCard>
        <UsersTable />
      </ContentCard>
    </PageContainer>
  );
};

export default LandingPage;
