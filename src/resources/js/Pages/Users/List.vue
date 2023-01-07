<script>
import PrivateLayout from '@/Layouts/PrivateLayout.vue'
import UsersLayout from '@/Pages/Users/UsersLayout.vue'

export default {
  layout: [PrivateLayout, UsersLayout],
}
</script>

<template>
   <q-page padding>
    <div class="row">
        <div class="col-xs-12 col-md-12">
          
          <div class="row">
            <q-input
              class="col-md-3 q-mr-md"
              type="text"
              value=""
              max-length="16"
              label="Buscar"
            />
            <q-select
              class="col-md-2 q-mr-md"
              
              map-options
              emit-value
              label="Roles"
            />
            <q-select
              class="col-md-2 q-mr-sm"
              map-options
              emit-value
              label="Estado"
            />
            <div class="col-md-1" style="text-align:center;">
              <q-btn
                round
                color="warning"
                size="md"
                icon="search">
                  <q-tooltip :delay="1000">
                    Buscar
                  </q-tooltip>
              </q-btn>
            </div>
          </div>
          <br>

          <div class="row">
            <q-table
              ref="dtbUsuarios"
              class="full-width"
              :data="serverData"
              :columns="columns"
              :loading="false"
              row-key="id"
              :pagination.sync="serverPagination"
              selection="single"
              :selected.sync="selected"
              @request="request"
            >
              <template slot="body" slot-scope="props">
                <q-tr :props="props">
                  <q-td auto-width>
                    <q-checkbox color="primary" v-model="props.selected" />
                  </q-td>
                  <q-td key="nombres" :props="props">{{ props.row.nombres }}</q-td>
                  <q-td key="apellidos" :props="props">{{ props.row.apellidos }}</q-td>
                  <q-td key="email" :props="props">{{ props.row.email }}</q-td>
                  <q-td key="roles" :props="props">
                  
                  </q-td>
                  <q-td key="activo" :props="props">
                    
                  </q-td>
                </q-tr>
              </template>
            </q-table>
          </div>
        </div>
    </div>
  </q-page>
</template>
