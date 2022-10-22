export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
}
export function UserDisplayname(req){
    if(req.user){
        return res.user.displayName;
    }
    return '';
}