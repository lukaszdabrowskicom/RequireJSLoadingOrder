<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication1._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

<div id="main">
    <br /><br /><br />
    Page demostrating module loading using require and define. <br />
    Open the console, go to Console tab,<br /> 
    type localhost:&lt;your-default-port-number&gt;/page-using-require.html or localhost:&lt;your-default-port-number&gt;/page-using-define.html,<br />
    to see loading order using require and define respectively.
</div>

</asp:Content>
