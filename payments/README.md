# Payment Portal - SSLCommerz Integration

This directory contains a payment portal integrated with SSLCommerz Bangladesh payment gateway.

## Overview

The payment portal allows users to make secure payments using various payment methods supported by SSLCommerz including:
- Credit/Debit Cards (Visa, Mastercard, Amex)
- Mobile Banking (bKash, Nagad, Rocket)
- Internet Banking
- Other payment methods

## Files

- `index.html` - Main payment form page
- `success.html` - Payment success callback page
- `fail.html` - Payment failure callback page
- `cancel.html` - Payment cancellation callback page
- `ipn.html` - Instant Payment Notification handler
- `README.md` - This documentation file

## SSLCommerz Configuration

### Sandbox Credentials
- **Store ID:** bangl69327680e8652
- **Store Name:** testbanglfclj
- **Registered URL:** www.bnwp.org
- **Merchant ID:** bangl6932767de6098
- **Merchant Name:** Bangla WikiConnect

### API Endpoints
- **Session API:** https://sandbox.sslcommerz.com/gwprocess/v3/api.php
- **Validation API:** https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php
- **Merchant Panel:** https://sandbox.sslcommerz.com/manage/

## How It Works

1. User fills out the payment form with transaction details and customer information
2. Form submits to SSLCommerz Session API to initiate payment
3. User is redirected to SSLCommerz payment gateway
4. User completes payment using their preferred method
5. SSLCommerz redirects back to:
   - `success.html` - if payment successful
   - `fail.html` - if payment failed
   - `cancel.html` - if user cancelled

## Important Notes

### Security Considerations

⚠️ **IMPORTANT:** The current implementation includes the store password in the client-side code for demonstration purposes. This is **NOT SECURE** for production use.

**For production deployment, you MUST:**

1. **Implement server-side integration** - Move the payment initialization to a backend server
2. **Secure credentials** - Store sensitive credentials (store password) on the server, never in client code
3. **Validate transactions** - Use the Validation API on server-side to verify payment status
4. **Use IPN properly** - Implement a server-side IPN handler to receive payment notifications
5. **Enable HTTPS** - Ensure your site uses HTTPS for all pages
6. **Implement fraud detection** - Add checks for suspicious transactions

### Current Limitations

This is a **client-side implementation** suitable for:
- Testing and development
- Sandbox environment
- Understanding the integration flow

For production use, you need:
- A backend server (Node.js, PHP, Python, etc.)
- Database to store transaction records
- Proper validation and security measures
- Server-side IPN handler

## Moving to Production

When ready to move from sandbox to live environment:

1. **Register for Live Account**
   - Contact SSLCommerz to activate your live merchant account
   - Get your live Store ID and Store Password

2. **Update Configuration**
   - Change API endpoints from sandbox to live:
     - Session API: `https://securepay.sslcommerz.com/gwprocess/v3/api.php`
     - Validation API: `https://securepay.sslcommerz.com/validator/api/validationserverAPI.php`
   - Update Store ID and credentials

3. **Implement Server-Side Logic**
   - Create backend API endpoints for:
     - Payment initialization
     - Transaction validation
     - IPN handling
   - Secure credential storage
   - Database integration

4. **Testing**
   - Test thoroughly in sandbox before going live
   - Verify all payment methods work correctly
   - Test success, failure, and cancellation flows
   - Verify IPN notifications are received

## Resources

- [SSLCommerz Documentation](https://developer.sslcommerz.com/)
- [SSLCommerz GitHub](https://github.com/sslcommerz)
- [Merchant Panel](https://sandbox.sslcommerz.com/manage/)

## Support

For technical issues:
- Email: shakil@bnwp.org
- SSLCommerz Support: integration@sslcommerz.com

## License

© 2026 Shakil Hosen
