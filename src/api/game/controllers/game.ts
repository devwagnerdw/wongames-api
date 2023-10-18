import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::game.game', ({strapi})=>({
    async populate(ctx) {
        console.log("rodando no servidor");
        ctx.send("finalizado no client")
    }
}));
