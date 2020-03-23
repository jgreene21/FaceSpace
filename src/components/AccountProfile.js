import React from 'react';
import Account from './Account';
import AccountForm from './AccountForm';
import { Header } from "semantic-ui-react";

const AccountProfile = () => (
  <>
  <Account />
  <Header size="medium">Edit Profile</Header>
  <AccountForm /> 
  </>
)

export default AccountProfile; 