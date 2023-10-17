class Processor {
  async sendEmail(userId) {
    await new Promise((res) => {
      setTimeout(res, 5000)
    })
    if (userId % 2 !== 0) {
      throw new Error()
    }
    console.log('Sending email to user: ', userId)
  }
}

export default Processor
