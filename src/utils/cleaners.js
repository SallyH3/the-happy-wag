export const cleanContactInfo = (contactInfo) => {
  return {
    city: contactInfo.address.city,
    state: contactInfo.address.state,
    email: contactInfo.email
  }
}