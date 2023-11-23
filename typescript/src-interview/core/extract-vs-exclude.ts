;(function () {
  type Status = 'active' | 'inactive' | 'deleted'

  const status1: Extract<Status, 'active' | 'inactive'> = 'active'
  const status2: Exclude<Status, 'deleted'> = 'inactive'
})()
