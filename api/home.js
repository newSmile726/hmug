import fly from "@/utils/request.js"
// 获取轮播图
export const getBannersApi = () => fly.get('/home/swiperdata')
// 获取分类菜单
export const getNavsApi = () => fly.get('/home/catitems')
// 获取楼层数据
export const getfloorsApi = () => fly.get('/home/floordata')
