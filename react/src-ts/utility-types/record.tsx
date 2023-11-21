import React from 'react'

function RecordTypeComponent({
  records,
}: {
  records: Record<string, string | number>
}) {
  return (
    <ul>
      {Object.entries(records).map(([key, value]) => (
        <li>
          {key}:{value}
        </li>
      ))}
    </ul>
  )
}

export { RecordTypeComponent }
