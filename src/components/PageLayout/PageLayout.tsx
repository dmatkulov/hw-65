import React from 'react';
import {Page} from "../../types";
interface Props {
  page: Page;
}
const PageLayout: React.FC<Props> = ({page}) => {
  return (
    <div>
      <h1 className="mb-5"
      >
        {page.title}
      </h1>
      <div>
        <p>{page.content}</p>
      </div>
    </div>
  );
};

export default PageLayout;