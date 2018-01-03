const Router = (el, attr, wrapper, push = false) => {
    
    if ($.isArray(el) && $.isArray(attr)) {
        
        $.each(el, (index, value) => {
            
            $(value).click((e) => {
                
                let target = $(e.target).attr(attr[index])
                
                $.ajax({
                    type: 'GET',
                    url: target,
                    success: (data) => {
                        $(wrapper).html(data)
                        let stateObj = {}
                        if (push) history.pushState(stateObj, null, target)
                    }
                })
                
                
                return false
            })
            
        })
        
    }
    
    else {
        $(el).click((e) => {
            let target = $(e.target).attr(attr)
            
            $.ajax({
                type: 'GET',
                url: target,
                success: (data) => {
                    $(wrapper).html(data)
                    let stateObj = {}
                    if (push) history.pushState(stateObj, null, target)
                }
            })
            
            return false
        })
    }
    
    window.onpopstate = (event) => {
        $.ajax({
            type: 'GET',
            url: document.location,
            success: (data) => {
                $(wrapper).html(data)
            }
        })
    }
}