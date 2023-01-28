interface Jwt {
  username: string, 
  id: number, 
  iat?: number, 
  exp?: number 
}
export default Jwt;