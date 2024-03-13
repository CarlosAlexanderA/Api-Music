export class BaseController {
  constructor (validatePartial, validateComplete, model) {
    this.validatePartial = validatePartial
    this.validateComplete = validateComplete
    this.model = model
  }

  async getAll (req, res) {
    const items = await this.model.getAll()
    res.json(items)
  }

  async getById (req, res) {
    const { id } = req.params
    const item = await this.model.getById({ id })
    if (item) return res.json(item)
    res.status(404).json({ message: 'Item not found' })
  }

  async create (req, res) {
    const result = this.validateComplete(req.body)

    if (!result.success) return res.status(400).json({ message: result.error.message })
    // console.log(req.body)
    const newItem = await this.model.create({ input: req.body })
    // console.log(newItem)
    return res.status(201).json(newItem)
  }

  async delete (req, res) {
    const { id } = req.params
    const result = await this.model.delete({ id })

    if (!result) return res.status(404).json({ message: 'Item not found' })

    return res.json(result)
  }

  async update (req, res) {
    const result = this.validatePartial(req.body)

    if (!result.success) { return res.status(400).json({ message: result.error.message }) }

    const { id } = req.params
    const updatedItem = await this.model.update({ id, input: req.body })

    res.json(updatedItem)
  }
}
