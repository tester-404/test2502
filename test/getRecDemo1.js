import supertest from 'supertest';
const request = supertest('https://gorest.co.in/public-api/');
import { expect } from 'chai';
const TOKEN =
    '028186c4431de8750ed1a11c0b0ce09cd985530d91eed768de6a137fa4a15882';
describe('Users', () => {
    it('GET /users', () => {
 //   request.get('users?access-token=${TOKEN}').end((err, res) => {
    return request.get('users?access-token=${TOKEN}').then((res) => {
 //   expect(res.body.data).to.be.empty;
    expect(res.body.data).to.not.be.empty;
    });
  });
  it('GET /users/:id', () => {
 //   return request.get('users/20?access-token=${TOKEN}').then((res) => {
 //   expect(res.body.data).to.not.be.empty;
    return request.get('users/20?access-token=${TOKEN}').then((res) => {
        expect(res.body.data.id).to.be.eq(20);
    });
  });
  
  
  it('GET /users with query params', () => {
    const url1 = 'users?access-token=${TOKEN}&page=2&status=Active&gender=Male'

    return request.get(url1).then((res) => {
    expect(res.body.data).to.not.be.empty;
    res.body.data.forEach((data) => {
        expect(data.gender).to.eq('Male');
        expect(data.status).to.eq('Active');
   }); 
  }); 

 });   

});
