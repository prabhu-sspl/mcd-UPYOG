/**
 * Created By : Umesh Kumar 
 * Created On : 13-05-2025
 * Purpose : Finance Card for micro-ui
 * Code status : open
 */
import { EmployeeModuleCard, FinanceChartIcon } from "@mcd89/finance-ui-react-components";
import React from "react";
import { useTranslation } from "react-i18next";

const FinanceCard = () => {
  const { t } = useTranslation();

  const userRoles = Digit.UserService.getUser()?.info?.roles?.map(role => role.code) || [];
  const isFinanceUser = userRoles.includes("EMPLOYEE") || userRoles.includes("FINANCE");

  if (!isFinanceUser) return null;
  // if (!Digit.Utils.finance2Access()) {
  //   return null;
  // }

  // const FINANCE2_CEMP = Digit.UserService.hasAccess(["EGF_BILL_CREATOR","EGF_BILL_APPROVER"]) || false;
  const propsForModuleCard = {
    Icon: <FinanceChartIcon />,
    moduleName: t("ACTION_TEST_FINANCE-2.O").toUpperCase(),
    links: [
       {
        label: t("Sample"),
        link: `/${window?.contextPath}/employee/finance2/sample`,
        //   roles: ROLES.MDMS,
      },
       {
        label: t("Expense Bill"),
        link: `/${window?.contextPath}/employee/finance2/expensebill/newform`,
        //   roles: ROLES.MDMS,
      },
         {
        label: t("Bill Voucher"),
        link: `/${window?.contextPath}/employee/finance2/bill-voucher/billvoucherform`,
        //   roles: ROLES.MDMS,
      },
           {
        label: t("View Bill Registers"),
        link: `/${window?.contextPath}/employee/finance2/bill-register/billregistersearch`,
        //   roles: ROLES.MDMS,
      },

      {
        label: t("Contractor Bill"),
        link: `/${window?.contextPath}/employee/finance2/contractor-bill/newform`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("Supplier Bill"),
        link: `/${window?.contextPath}/employee/finance2/supplier-bill/newform`,
        //   roles: ROLES.MDMS,
      },



      // Paymets module
      {
        label: t("Create Direct Bank Payment"),
        link: `/${window?.contextPath}/employee/finance2/direct-bank-payment/DirectBankPayment-Form`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("RTGS Assignment"),
        link: `/${window?.contextPath}/employee/finance2/cheque-assignment/ChequeAssignmentBeforeSearch`,
        //   roles: ROLES.MDMS,
      },

      {
        label: t("Bill Payment "),
        link: `/${window?.contextPath}/employee/finance2/bll-payments/Payment-beforeSearch`,
        //   roles: ROLES.MDMS,
      },


      {
        label: t("Cheque Assignment"),
        link: `/${window?.contextPath}/employee/finance2/rtgs-assignment/ChequeAssignment-beforeRtgsSearch`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("Surrender Cheque"),
        link: `/${window?.contextPath}/employee/finance2/surrender-cheque/BeforeSearchForSurrender`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("Surrender RTGS"),
        link: `/${window?.contextPath}/employee/finance2/surrender-rtgs-search/BeforeSearchForRTGSSurrender`,
        //   roles: ROLES.MDMS,
      },














      {
        label: t("ACTION_TEST_INBOX"),
        link: `/${window?.contextPath}/employee/finance2/inbox`,
        //   roles: ROLES.MDMS,
      },
      {
        label: t("TENANT_FINANCE_MODULE"),
        link: `/${window?.contextPath}/employee/finance2/voucher/journalVoucher`,
        //   roles: ROLES.LOCALISATION,
      },
      {
        label: t("ACTION_TEST_APPLY_TEST"),
        link: `/${window?.contextPath}/employee/finance2/test`,
        //   roles: ROLES.WORKFLOW,
      }
    ],
  };

  return <EmployeeModuleCard {...propsForModuleCard} />;
};

export default FinanceCard;