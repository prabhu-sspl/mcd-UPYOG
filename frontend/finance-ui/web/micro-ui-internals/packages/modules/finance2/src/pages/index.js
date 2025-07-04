import React, { useEffect } from "react";
import { Switch, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PrivateRoute, AppContainer, BreadCrumb } from "@egovernments/digit-ui-react-components";
import Inbox from "../components/inbox";
import ReceiptNewform from "./employee/FinanceReceiptForm"
import ExpenseBillNewform from "./employee/expenditure-accounting/bills-accounting/expense-bill/NewForm";
import BillVoucherForm from "./employee/expenditure-accounting/bills-accounting/bill-voucher/BillVoucherForm"
import BillRegisterSearch from "./employee/expenditure-accounting/bills-accounting/bill-register/BillRegisterSearch";
import ContractorNewform from "./employee/expenditure-accounting/bills-accounting/contractor-bill/NewForm";

const FinanceBreadCrumb = ({ location, defaultPath }) => {
  const { t } = useTranslation();
  const search = useLocation().search;
  const fromScreen = new URLSearchParams(search).get("from") || null;
  const pathVar = location.pathname.replace(defaultPath + '/', "").split("?")?.[0];

  const crumbs = [
    {
      path: `/${window?.contextPath}/employee`,
      content: t("HOME"),
      show: true,
    },
    {
      path: `/${window.contextPath}/employee/finance`,
      content: t("FINANCE_HOME"),
      show: true,
    },
    {
      path: `/${window.contextPath}/employee/finance/sample`,
      content: t("SAMPLE_SCREEN"),
      show: pathVar.includes("sample"),
    }
  ];
  return <BreadCrumb className="finance-bredcrumb" crumbs={crumbs} spanStyle={{ maxWidth: "min-content" }} />;
};

const FinanceApp = ({ path }) => {
  const location = useLocation();

  return (
    <React.Fragment>
      <FinanceBreadCrumb location={location} defaultPath={path} />
      <Switch>
        <AppContainer className="finance">
           <PrivateRoute path={`${path}/sample`} component={() => <div>Sample Screen loaded</div>} />
            <PrivateRoute path={`${path}/expensebill/newform`} component={() => <ExpenseBillNewform/>} />
            <PrivateRoute path={`${path}/bill-voucher/billvoucherform`} component={() => <BillVoucherForm/>} />   
              <PrivateRoute path={`${path}/bill-register/billregistersearch`} component={() => <BillRegisterSearch/>} />   
              <PrivateRoute path={`${path}/contractor-bill/newform`} component={() => <ContractorNewform/>} />   




          <PrivateRoute exact path={`${path}/voucher/journalVoucher`} component={() => <ReceiptNewform />} />
          <PrivateRoute exact path={`${path}/inbox`} component={() => <Inbox />} />
           {/* Add more finance routes here as needed */}
        </AppContainer>
      </Switch>
    </React.Fragment>
  );
};

export default FinanceApp;