import service from "@/plugin/service";

// 获取首页全部文章？分页:下拉
export function getAtricleList(id){
    return service({
        method: 'get',
        url: `/article?id=${id}`
    })
}

// 根据id获取文章详情
export function getArticle(id){
    return service({
        method: 'post',
        url: `/article/${id}`
    })
}