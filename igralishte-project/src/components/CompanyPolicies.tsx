import { CompanyPoliciesType } from "@/types/types";
import { GetStaticProps } from "next";
import React, { useState } from "react";

interface Props {
  companyPoliciesData: CompanyPoliciesType;
}

const CompanyPolicies = ({ companyPoliciesData }: Props) => {
  const [qualityContol, setQualityControl] = useState<boolean>(false);
  const [returnPolicy, setReturnPolicy] = useState<boolean>(false);
  const [delivery, setDelivery] = useState<boolean>(false);
  const [help, setHelp] = useState<boolean>(false);

  return (
    <div className="col-12 mb-4">
      <div className="cormorant-infant-font font-weight-400">
        {/* quality  */}
        <div className="light-grey-1 py-4 mb-3">
          <div className="d-flex justify-content-around align-items-center border-detail mb-2 align-items-center ">
            <img
              src={companyPoliciesData.quality_inspection_image}
              className="pl-2"
            />
            <span className="fancy-olive pl-2">
              {companyPoliciesData.quality_inspection}
            </span>
            <img
              src="../icons/plus.png"
              alt="plus"
              className="pl-2"
              onClick={() => setQualityControl(!qualityContol)}
            />
          </div>
          {qualityContol ? (
            <small className="dark-grey px-4 d-block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              pariatur provident minus quidem et alias nostrum ipsam corporis
              nemo omnis! Lorem ipsum dolor sit dolor sit.
            </small>
          ) : (
            ""
          )}
        </div>

        {/* return policy */}
        <div className="light-grey-1 py-4 mb-3">
          <div className="d-flex justify-content-around align-items-center border-detail mb-2 align-items-center">
            <img
              src={companyPoliciesData.return_policies_image}
              className="pl-2"
            />
            <span className="fancy-olive pl-2">
              {companyPoliciesData.return_policies}
            </span>
            <img
              src="../icons/plus.png"
              alt="plus"
              className="pl-2"
              onClick={() => setReturnPolicy(!returnPolicy)}
            />
          </div>
          {returnPolicy ? (
            <small className="dark-grey px-4 d-block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              pariatur provident minus quidem et alias nostrum ipsam corporis
              nemo omnis! Lorem ipsum dolor sit dolor sit.
            </small>
          ) : (
            ""
          )}
        </div>

        {/* delivery */}
        <div className="light-grey-1 py-4 mb-3">
          <div className="d-flex justify-content-around align-items-center border-detail mb-2 align-items-center">
            <img src={companyPoliciesData.delivery_image} className="pl-2" />
            <span className="fancy-olive pl-2">
              {companyPoliciesData.delivery}
            </span>
            <img
              src="../icons/plus.png"
              alt="plus"
              className="pl-2"
              onClick={() => setDelivery(!delivery)}
            />
          </div>
          {delivery ? (
            <small className="dark-grey px-4 d-block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              pariatur provident minus quidem et alias nostrum ipsam corporis
              nemo omnis! Lorem ipsum dolor sit dolor sit.
            </small>
          ) : (
            ""
          )}
        </div>

        {/* help */}
        <div className="light-grey-1 py-4 mb-3">
          <div className="d-flex justify-content-around align-items-center border-detail mb-2 align-items-center light-grey-1">
            <img src={companyPoliciesData.help_image} className="pl-2" />
            <span className="fancy-olive pl-2">{companyPoliciesData.help}</span>
            <img
              src="../icons/plus.png"
              alt="plus"
              className="pl-2"
              onClick={() => setHelp(!help)}
            />
          </div>
          {help ? (
            <small className="dark-grey px-4 d-block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              pariatur provident minus quidem et alias nostrum ipsam corporis
              nemo omnis! Lorem ipsum dolor sit dolor sit.
            </small>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyPolicies;
