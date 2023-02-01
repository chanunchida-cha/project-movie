import Button from "@/ui/Button";
import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  title?: string;
  titleButtonHead?: boolean;
}

function PageListLayout({ title, titleButtonHead }: Props) {
  return (
    <div>
      <div className="text-2xl">{title}</div>
      {titleButtonHead && (
        <div className="mt-5 text-lg">
          <Button
            title={"เพิ่มหนัง"}
          />
        </div>
      )}
    </div>
  );
}

export default PageListLayout;
