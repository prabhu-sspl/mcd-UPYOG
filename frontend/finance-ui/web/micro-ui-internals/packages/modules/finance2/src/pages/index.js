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
import SupplierNewform from "./employee/expenditure-accounting/bills-accounting/supplier-bill/NewForm";
import PaymentBeforeSearch from "./employee/expenditure-accounting/payments/bll-payments/Payment-beforeSearch";
import ChequeAssignmentBeforeSearch from "./employee/expenditure-accounting/payments/cheque-assignment/ChequeAssignmentBeforeSearch";
import DirectBankPaymentForm from "./employee/expenditure-accounting/payments/direct-bank-payment/DirectBankPayment-Form";
import ChequeAssignmentBeforeRtgsSearch from "./employee/expenditure-accounting/payments/rtgs-assignment/ChequeAssignment-beforeRtgsSearch";
import BeforeSearchForSurrender from "./employee/expenditure-accounting/payments/surrender-cheque/BeforeSearchForSurrender";
import BeforeSearchForRTGSSurrender from "./employee/expenditure-accounting/payments/surrender-rtgs-search/BeforeSearchForRTGSSurrender";

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
              <PrivateRoute path={`${path}/supplier-bill/newform`} component={() => <SupplierNewform/>} /> 


              <PrivateRoute path={`${path}/direct-bank-payment/DirectBankPayment-Form`} component={() => <DirectBankPaymentForm/>} /> 
              <PrivateRoute path={`${path}/cheque-assignment/ChequeAssignmentBeforeSearch`} component={() => <ChequeAssignmentBeforeSearch/>} /> 
              <PrivateRoute path={`${path}/bll-payments/Payment-beforeSearch`} component={() => <PaymentBeforeSearch/>} /> 
              <PrivateRoute path={`${path}/cheque-assignment/ChequeAssignmentBeforeSearch`} component={() => <ChequeAssignmentBeforeSearch/>} /> 
              <PrivateRoute path={`${path}/direct-bank-payment/DirectBankPayment-Form`} component={() => <DirectBankPaymentForm/>} /> 
              <PrivateRoute path={`${path}/rtgs-assignment/ChequeAssignment-beforeRtgsSearch`} component={() => <ChequeAssignmentBeforeRtgsSearch/>} /> 
              <PrivateRoute path={`${path}/surrender-cheque/BeforeSearchForSurrender`} component={() => <BeforeSearchForSurrender/>} /> 
              <PrivateRoute path={`${path}/surrender-rtgs-search/BeforeSearchForRTGSSurrender`} component={() => <BeforeSearchForRTGSSurrender/>} /> 



          <PrivateRoute exact path={`${path}/voucher/journalVoucher`} component={() => <ReceiptNewform />} />
          <PrivateRoute exact path={`${path}/inbox`} component={() => <Inbox />} />
           {/* Add more finance routes here as needed */}
        </AppContainer>
      </Switch>
    </React.Fragment>
  );
};

export default FinanceApp;