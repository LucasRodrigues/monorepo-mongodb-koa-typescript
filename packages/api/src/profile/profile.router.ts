import Router from 'koa-router';
import { ProfileController } from './ProfileController';

const controller = new ProfileController();

const profileRouter = new Router({
  prefix: '/profiles',
});

profileRouter.get('/', (ctx) => controller.list(ctx));
profileRouter.post('/', (ctx) => controller.create(ctx));

export { profileRouter };
