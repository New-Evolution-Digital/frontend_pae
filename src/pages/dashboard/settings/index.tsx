import React from 'react'

import DescriptionArea from '../../../components/common/DescriptionArea'
import UpdateOrgDetails from '../../../components/dashboard/settings/UpdateOrgDetails'
import DashboardShell from '../../../templates/DashboardShell'

const SettingsView = () => {
  return (
    <DashboardShell header="Settings">
      <DescriptionArea title="Organization Details">
        <UpdateOrgDetails />
      </DescriptionArea>
    </DashboardShell>
  )
}

export default SettingsView
