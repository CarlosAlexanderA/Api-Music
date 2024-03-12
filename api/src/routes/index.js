export function createRouters (baseController, router) {
  router.get('/', baseController.getAll.bind(baseController))
  router.get('/:id', baseController.getById.bind(baseController))
  router.post('/', baseController.create.bind(baseController))
  router.delete('/:id', baseController.delete.bind(baseController))
  router.patch('/:id', baseController.update.bind(baseController))
}
