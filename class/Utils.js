class Utils{

    static dateFormat(date){
    
        //Colocando o zero a esquerda na data.
        let dia = (((date.getDate()) < 10) ? '0'+date.getDate() : date.getDate());
        let mes = ((date.getMonth()+1) < 10) ? ''+date.getMonth()+1 : date.getMonth()+1;

        return dia+'/'+mes+'/'+date.getFullYear()+' '+date.getHours()+":"+date.getMinutes();

    }

}