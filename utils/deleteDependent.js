/**
 * deleteDependent.js
 * @description :: exports deleteDependent service for project.
 */

let Patient = require('../model/patient');
let Order = require('../model/order');
let OrderItem = require('../model/orderItem');
let Medication = require('../model/medication');
let Note = require('../model/note');
let Encounter = require('../model/encounter');
let Enterprise = require('../model/enterprise');
let Departments = require('../model/departments');
let Customer = require('../model/Customer');
let Task = require('../model/Task');
let Comment = require('../model/Comment');
let Plan = require('../model/Plan');
let Chat_group = require('../model/Chat_group');
let Chat_message = require('../model/Chat_message');
let ToDo = require('../model/ToDo');
let Appointment_schedule = require('../model/Appointment_schedule');
let Event = require('../model/Event');
let Appointment_slot = require('../model/Appointment_slot');
let Master = require('../model/Master');
let Blog = require('../model/Blog');
let User = require('../model/user');
let UserTokens = require('../model/userTokens');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('.//dbService');

const deletePatient = async (filter) =>{
  try {
    let patient = await Patient.find(filter, { _id:1 });
    if (patient.length){
      patient = patient.map((obj) => obj._id);

      const orderFilter = { '$or': [{ patientId : { '$in' : patient } }] };
      await dbService.deleteMany(Order,orderFilter);
      let response  = await dbService.deleteMany(Patient,filter);
      return response;
    } else {
      return 'No patient found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOrder = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Order,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteOrderItem = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(OrderItem,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteMedication = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Medication,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteNote = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Note,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteEncounter = async (filter) =>{
  try {
    let encounter = await Encounter.find(filter, { _id:1 });
    if (encounter.length){
      encounter = encounter.map((obj) => obj._id);

      const noteFilter = { '$or': [{ encounterId : { '$in' : encounter } }] };
      await dbService.deleteMany(Note,noteFilter);
      let response  = await dbService.deleteMany(Encounter,filter);
      return response;
    } else {
      return 'No encounter found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteEnterprise = async (filter) =>{
  try {
    let enterprise = await Enterprise.find(filter, { _id:1 });
    if (enterprise.length){
      enterprise = enterprise.map((obj) => obj._id);

      const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterprise } }] };
      await dbService.deleteMany(Departments,departmentsFilter);
      let response  = await dbService.deleteMany(Enterprise,filter);
      return response;
    } else {
      return 'No enterprise found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteDepartments = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Departments,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteCustomer = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Customer,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteTask = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Task,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteComment = async (filter) =>{
  try {
    let comment = await Comment.find(filter, { _id:1 });
    if (comment.length){
      comment = comment.map((obj) => obj._id);

      const CommentFilter = { '$or': [{ parentItem : { '$in' : comment } }] };
      await dbService.deleteMany(Comment,CommentFilter);
      let response  = await dbService.deleteMany(Comment,filter);
      return response;
    } else {
      return 'No Comment found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deletePlan = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Plan,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteChat_group = async (filter) =>{
  try {
    let chat_group = await Chat_group.find(filter, { _id:1 });
    if (chat_group.length){
      chat_group = chat_group.map((obj) => obj._id);

      const Chat_messageFilter = { '$or': [{ groupId : { '$in' : chat_group } }] };
      await dbService.deleteMany(Chat_message,Chat_messageFilter);
      let response  = await dbService.deleteMany(Chat_group,filter);
      return response;
    } else {
      return 'No Chat_group found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteChat_message = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Chat_message,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteToDo = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(ToDo,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAppointment_schedule = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Appointment_schedule,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteEvent = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Event,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAppointment_slot = async (filter) =>{
  try {
    let appointment_slot = await Appointment_slot.find(filter, { _id:1 });
    if (appointment_slot.length){
      appointment_slot = appointment_slot.map((obj) => obj._id);

      const Appointment_scheduleFilter = { '$or': [{ slot : { '$in' : appointment_slot } }] };
      await dbService.deleteMany(Appointment_schedule,Appointment_scheduleFilter);
      let response  = await dbService.deleteMany(Appointment_slot,filter);
      return response;
    } else {
      return 'No Appointment_slot found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteMaster = async (filter) =>{
  try {
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);

      const MasterFilter = { '$or': [{ parentId : { '$in' : master } }] };
      await dbService.deleteMany(Master,MasterFilter);
      let response  = await dbService.deleteMany(Master,filter);
      return response;
    } else {
      return 'No Master found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteBlog = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(Blog,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);

      const patientFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Patient,patientFilter);

      const orderFilter = { '$or': [{ orderBy : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Order,orderFilter);

      const orderItemFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(OrderItem,orderItemFilter);

      const medicationFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Medication,medicationFilter);

      const noteFilter = { '$or': [{ provider : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Note,noteFilter);

      const encounterFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Encounter,encounterFilter);

      const enterpriseFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Enterprise,enterpriseFilter);

      const departmentsFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Departments,departmentsFilter);

      const CustomerFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Customer,CustomerFilter);

      const TaskFilter = { '$or': [{ completedBy : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Task,TaskFilter);

      const CommentFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Comment,CommentFilter);

      const PlanFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Plan,PlanFilter);

      const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Chat_group,Chat_groupFilter);

      const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Chat_message,Chat_messageFilter);

      const ToDoFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(ToDo,ToDoFilter);

      const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Appointment_schedule,Appointment_scheduleFilter);

      const EventFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Event,EventFilter);

      const Appointment_slotFilter = { '$or': [{ userId : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Appointment_slot,Appointment_slotFilter);

      const MasterFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Master,MasterFilter);

      const BlogFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      await dbService.deleteMany(Blog,BlogFilter);

      const userFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(User,userFilter);

      const userTokensFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(UserTokens,userTokensFilter);

      const roleFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(Role,roleFilter);

      const projectRouteFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(ProjectRoute,projectRouteFilter);

      const routeRoleFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      await dbService.deleteMany(UserRole,userRoleFilter);
      let response  = await dbService.deleteMany(User,filter);
      return response;
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(UserTokens,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      await dbService.deleteMany(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      await dbService.deleteMany(UserRole,userRoleFilter);
      let response  = await dbService.deleteMany(Role,filter);
      return response;
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectroute } }] };
      await dbService.deleteMany(RouteRole,routeRoleFilter);
      let response  = await dbService.deleteMany(ProjectRoute,filter);
      return response;
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(RouteRole,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    let response  = await dbService.deleteMany(UserRole,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const countPatient = async (filter) =>{
  try {
        
    let patient = await Patient.find(filter, { _id:1 });
    if (patient.length){
      patient = patient.map((obj) => obj._id);

      const orderFilter = { '$or': [{ patientId : { '$in' : patient } }] };
      const orderCnt =  await dbService.countDocument(Order,orderFilter);

      let response = { order : orderCnt, };
      return response;
    } else {
      return {  patient : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countOrder = async (filter) =>{
  try {
        
    const orderCnt =  await Order.countDocuments(filter);
    return { order : orderCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countOrderItem = async (filter) =>{
  try {
        
    const orderItemCnt =  await OrderItem.countDocuments(filter);
    return { orderItem : orderItemCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countMedication = async (filter) =>{
  try {
        
    const medicationCnt =  await Medication.countDocuments(filter);
    return { medication : medicationCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countNote = async (filter) =>{
  try {
        
    const noteCnt =  await Note.countDocuments(filter);
    return { note : noteCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countEncounter = async (filter) =>{
  try {
        
    let encounter = await Encounter.find(filter, { _id:1 });
    if (encounter.length){
      encounter = encounter.map((obj) => obj._id);

      const noteFilter = { '$or': [{ encounterId : { '$in' : encounter } }] };
      const noteCnt =  await dbService.countDocument(Note,noteFilter);

      let response = { note : noteCnt, };
      return response;
    } else {
      return {  encounter : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countEnterprise = async (filter) =>{
  try {
        
    let enterprise = await Enterprise.find(filter, { _id:1 });
    if (enterprise.length){
      enterprise = enterprise.map((obj) => obj._id);

      const departmentsFilter = { '$or': [{ enterprises : { '$in' : enterprise } }] };
      const departmentsCnt =  await dbService.countDocument(Departments,departmentsFilter);

      let response = { departments : departmentsCnt, };
      return response;
    } else {
      return {  enterprise : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countDepartments = async (filter) =>{
  try {
        
    const departmentsCnt =  await Departments.countDocuments(filter);
    return { departments : departmentsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countCustomer = async (filter) =>{
  try {
        
    const CustomerCnt =  await Customer.countDocuments(filter);
    return { Customer : CustomerCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countTask = async (filter) =>{
  try {
        
    const TaskCnt =  await Task.countDocuments(filter);
    return { Task : TaskCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countComment = async (filter) =>{
  try {
        
    let comment = await Comment.find(filter, { _id:1 });
    if (comment.length){
      comment = comment.map((obj) => obj._id);

      const CommentFilter = { '$or': [{ parentItem : { '$in' : comment } }] };
      const CommentCnt =  await dbService.countDocument(Comment,CommentFilter);

      let response = { Comment : CommentCnt, };
      return response;
    } else {
      return {  comment : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countPlan = async (filter) =>{
  try {
        
    const PlanCnt =  await Plan.countDocuments(filter);
    return { Plan : PlanCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countChat_group = async (filter) =>{
  try {
        
    let chat_group = await Chat_group.find(filter, { _id:1 });
    if (chat_group.length){
      chat_group = chat_group.map((obj) => obj._id);

      const Chat_messageFilter = { '$or': [{ groupId : { '$in' : chat_group } }] };
      const Chat_messageCnt =  await dbService.countDocument(Chat_message,Chat_messageFilter);

      let response = { Chat_message : Chat_messageCnt, };
      return response;
    } else {
      return {  chat_group : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countChat_message = async (filter) =>{
  try {
        
    const Chat_messageCnt =  await Chat_message.countDocuments(filter);
    return { Chat_message : Chat_messageCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countToDo = async (filter) =>{
  try {
        
    const ToDoCnt =  await ToDo.countDocuments(filter);
    return { ToDo : ToDoCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countAppointment_schedule = async (filter) =>{
  try {
        
    const Appointment_scheduleCnt =  await Appointment_schedule.countDocuments(filter);
    return { Appointment_schedule : Appointment_scheduleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countEvent = async (filter) =>{
  try {
        
    const EventCnt =  await Event.countDocuments(filter);
    return { Event : EventCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countAppointment_slot = async (filter) =>{
  try {
        
    let appointment_slot = await Appointment_slot.find(filter, { _id:1 });
    if (appointment_slot.length){
      appointment_slot = appointment_slot.map((obj) => obj._id);

      const Appointment_scheduleFilter = { '$or': [{ slot : { '$in' : appointment_slot } }] };
      const Appointment_scheduleCnt =  await dbService.countDocument(Appointment_schedule,Appointment_scheduleFilter);

      let response = { Appointment_schedule : Appointment_scheduleCnt, };
      return response;
    } else {
      return {  appointment_slot : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countMaster = async (filter) =>{
  try {
        
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);

      const MasterFilter = { '$or': [{ parentId : { '$in' : master } }] };
      const MasterCnt =  await dbService.countDocument(Master,MasterFilter);

      let response = { Master : MasterCnt, };
      return response;
    } else {
      return {  master : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countBlog = async (filter) =>{
  try {
        
    const BlogCnt =  await Blog.countDocuments(filter);
    return { Blog : BlogCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
        
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);

      const patientFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const patientCnt =  await dbService.countDocument(Patient,patientFilter);

      const orderFilter = { '$or': [{ orderBy : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const orderCnt =  await dbService.countDocument(Order,orderFilter);

      const orderItemFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const orderItemCnt =  await dbService.countDocument(OrderItem,orderItemFilter);

      const medicationFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const medicationCnt =  await dbService.countDocument(Medication,medicationFilter);

      const noteFilter = { '$or': [{ provider : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const noteCnt =  await dbService.countDocument(Note,noteFilter);

      const encounterFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const encounterCnt =  await dbService.countDocument(Encounter,encounterFilter);

      const enterpriseFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const enterpriseCnt =  await dbService.countDocument(Enterprise,enterpriseFilter);

      const departmentsFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const departmentsCnt =  await dbService.countDocument(Departments,departmentsFilter);

      const CustomerFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const CustomerCnt =  await dbService.countDocument(Customer,CustomerFilter);

      const TaskFilter = { '$or': [{ completedBy : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const TaskCnt =  await dbService.countDocument(Task,TaskFilter);

      const CommentFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const CommentCnt =  await dbService.countDocument(Comment,CommentFilter);

      const PlanFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const PlanCnt =  await dbService.countDocument(Plan,PlanFilter);

      const Chat_groupFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Chat_groupCnt =  await dbService.countDocument(Chat_group,Chat_groupFilter);

      const Chat_messageFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Chat_messageCnt =  await dbService.countDocument(Chat_message,Chat_messageFilter);

      const ToDoFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const ToDoCnt =  await dbService.countDocument(ToDo,ToDoFilter);

      const Appointment_scheduleFilter = { '$or': [{ host : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Appointment_scheduleCnt =  await dbService.countDocument(Appointment_schedule,Appointment_scheduleFilter);

      const EventFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const EventCnt =  await dbService.countDocument(Event,EventFilter);

      const Appointment_slotFilter = { '$or': [{ userId : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Appointment_slotCnt =  await dbService.countDocument(Appointment_slot,Appointment_slotFilter);

      const MasterFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const MasterCnt =  await dbService.countDocument(Master,MasterFilter);

      const BlogFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const BlogCnt =  await dbService.countDocument(Blog,BlogFilter);

      const userFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userCnt =  await dbService.countDocument(User,userFilter);

      const userTokensFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userTokensCnt =  await dbService.countDocument(UserTokens,userTokensFilter);

      const roleFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const roleCnt =  await dbService.countDocument(Role,roleFilter);

      const projectRouteFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const projectRouteCnt =  await dbService.countDocument(ProjectRoute,projectRouteFilter);

      const routeRoleFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        patient : patientCnt,
        order : orderCnt,
        orderItem : orderItemCnt,
        medication : medicationCnt,
        note : noteCnt,
        encounter : encounterCnt,
        enterprise : enterpriseCnt,
        departments : departmentsCnt,
        Customer : CustomerCnt,
        Task : TaskCnt,
        Comment : CommentCnt,
        Plan : PlanCnt,
        Chat_group : Chat_groupCnt,
        Chat_message : Chat_messageCnt,
        ToDo : ToDoCnt,
        Appointment_schedule : Appointment_scheduleCnt,
        Event : EventCnt,
        Appointment_slot : Appointment_slotCnt,
        Master : MasterCnt,
        Blog : BlogCnt,
        user : userCnt,
        userTokens : userTokensCnt,
        role : roleCnt,
        projectRoute : projectRouteCnt,
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
        
    const userTokensCnt =  await UserTokens.countDocuments(filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
        
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      const userRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      const userRoleCnt =  await dbService.countDocument(UserRole,userRoleFilter);

      let response = {
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response;
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
        
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);

      const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectroute } }] };
      const routeRoleCnt =  await dbService.countDocument(RouteRole,routeRoleFilter);

      let response = { routeRole : routeRoleCnt, };
      return response;
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
        
    const routeRoleCnt =  await RouteRole.countDocuments(filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
        
    const userRoleCnt =  await UserRole.countDocuments(filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeletePatient = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let patient = await Patient.find(filter, { _id:1 });
    if (patient.length){
      patient = patient.map((obj) => obj._id);
      const orderFilter5019 = { 'patientId': { '$in': patient } };
      const order5395 = await softDeleteOrder(orderFilter5019, updateBody);
      return await Patient.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No patient found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOrder = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Order.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteOrderItem = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await OrderItem.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteMedication = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Medication.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteNote = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Note.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteEncounter = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let encounter = await Encounter.find(filter, { _id:1 });
    if (encounter.length){
      encounter = encounter.map((obj) => obj._id);
      const noteFilter4897 = { 'encounterId': { '$in': encounter } };
      const note5904 = await softDeleteNote(noteFilter4897, updateBody);
      return await Encounter.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No encounter found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteEnterprise = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let enterprise = await Enterprise.find(filter, { _id:1 });
    if (enterprise.length){
      enterprise = enterprise.map((obj) => obj._id);
      const departmentsFilter0807 = { 'enterprises': { '$in': enterprise } };
      const departments9409 = await softDeleteDepartments(departmentsFilter0807, updateBody);
      return await Enterprise.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No enterprise found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteDepartments = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Departments.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteCustomer = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Customer.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteTask = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Task.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteComment = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let comment = await Comment.find(filter, { _id:1 });
    if (comment.length){
      comment = comment.map((obj) => obj._id);
      const CommentFilter1786 = { 'parentItem': { '$in': comment } };
      const Comment8979 = await softDeleteComment(CommentFilter1786, updateBody);
      return await Comment.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No Comment found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeletePlan = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Plan.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteChat_group = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let chat_group = await Chat_group.find(filter, { _id:1 });
    if (chat_group.length){
      chat_group = chat_group.map((obj) => obj._id);
      const Chat_messageFilter8666 = { 'groupId': { '$in': chat_group } };
      const Chat_message8679 = await softDeleteChat_message(Chat_messageFilter8666, updateBody);
      return await Chat_group.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No Chat_group found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteChat_message = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Chat_message.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteToDo = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await ToDo.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAppointment_schedule = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Appointment_schedule.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteEvent = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Event.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAppointment_slot = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let appointment_slot = await Appointment_slot.find(filter, { _id:1 });
    if (appointment_slot.length){
      appointment_slot = appointment_slot.map((obj) => obj._id);
      const Appointment_scheduleFilter1957 = { 'slot': { '$in': appointment_slot } };
      const Appointment_schedule1382 = await softDeleteAppointment_schedule(Appointment_scheduleFilter1957, updateBody);
      return await Appointment_slot.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No Appointment_slot found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteMaster = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let master = await Master.find(filter, { _id:1 });
    if (master.length){
      master = master.map((obj) => obj._id);
      const MasterFilter8658 = { 'parentId': { '$in': master } };
      const Master2947 = await softDeleteMaster(MasterFilter8658, updateBody);
      return await Master.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No Master found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteBlog = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await Blog.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let user = await User.find(filter, { _id:1 });
    if (user.length){
      user = user.map((obj) => obj._id);
      const patientFilter2735 = { 'addedBy': { '$in': user } };
      const patient7002 = await softDeletePatient(patientFilter2735, updateBody);
      const patientFilter7575 = { 'updatedBy': { '$in': user } };
      const patient6557 = await softDeletePatient(patientFilter7575, updateBody);
      const orderFilter5131 = { 'orderBy': { '$in': user } };
      const order5718 = await softDeleteOrder(orderFilter5131, updateBody);
      const orderFilter0228 = { 'addedBy': { '$in': user } };
      const order3154 = await softDeleteOrder(orderFilter0228, updateBody);
      const orderFilter5253 = { 'updatedBy': { '$in': user } };
      const order7241 = await softDeleteOrder(orderFilter5253, updateBody);
      const orderItemFilter0660 = { 'addedBy': { '$in': user } };
      const orderItem1950 = await softDeleteOrderItem(orderItemFilter0660, updateBody);
      const orderItemFilter4255 = { 'updatedBy': { '$in': user } };
      const orderItem1608 = await softDeleteOrderItem(orderItemFilter4255, updateBody);
      const medicationFilter5084 = { 'addedBy': { '$in': user } };
      const medication7666 = await softDeleteMedication(medicationFilter5084, updateBody);
      const medicationFilter5511 = { 'updatedBy': { '$in': user } };
      const medication1647 = await softDeleteMedication(medicationFilter5511, updateBody);
      const noteFilter3922 = { 'provider': { '$in': user } };
      const note6487 = await softDeleteNote(noteFilter3922, updateBody);
      const noteFilter6872 = { 'addedBy': { '$in': user } };
      const note1089 = await softDeleteNote(noteFilter6872, updateBody);
      const noteFilter8674 = { 'updatedBy': { '$in': user } };
      const note9229 = await softDeleteNote(noteFilter8674, updateBody);
      const encounterFilter7994 = { 'addedBy': { '$in': user } };
      const encounter0492 = await softDeleteEncounter(encounterFilter7994, updateBody);
      const encounterFilter5677 = { 'updatedBy': { '$in': user } };
      const encounter6442 = await softDeleteEncounter(encounterFilter5677, updateBody);
      const enterpriseFilter8620 = { 'addedBy': { '$in': user } };
      const enterprise3851 = await softDeleteEnterprise(enterpriseFilter8620, updateBody);
      const enterpriseFilter9914 = { 'updatedBy': { '$in': user } };
      const enterprise5254 = await softDeleteEnterprise(enterpriseFilter9914, updateBody);
      const departmentsFilter4564 = { 'addedBy': { '$in': user } };
      const departments5853 = await softDeleteDepartments(departmentsFilter4564, updateBody);
      const departmentsFilter7937 = { 'updatedBy': { '$in': user } };
      const departments9381 = await softDeleteDepartments(departmentsFilter7937, updateBody);
      const CustomerFilter8780 = { 'addedBy': { '$in': user } };
      const Customer9609 = await softDeleteCustomer(CustomerFilter8780, updateBody);
      const CustomerFilter4447 = { 'updatedBy': { '$in': user } };
      const Customer5077 = await softDeleteCustomer(CustomerFilter4447, updateBody);
      const TaskFilter0449 = { 'completedBy': { '$in': user } };
      const Task4664 = await softDeleteTask(TaskFilter0449, updateBody);
      const TaskFilter0720 = { 'updatedBy': { '$in': user } };
      const Task0173 = await softDeleteTask(TaskFilter0720, updateBody);
      const TaskFilter0470 = { 'addedBy': { '$in': user } };
      const Task4085 = await softDeleteTask(TaskFilter0470, updateBody);
      const CommentFilter6839 = { 'updatedBy': { '$in': user } };
      const Comment7981 = await softDeleteComment(CommentFilter6839, updateBody);
      const CommentFilter5591 = { 'addedBy': { '$in': user } };
      const Comment4304 = await softDeleteComment(CommentFilter5591, updateBody);
      const PlanFilter8187 = { 'updatedBy': { '$in': user } };
      const Plan4015 = await softDeletePlan(PlanFilter8187, updateBody);
      const PlanFilter0760 = { 'addedBy': { '$in': user } };
      const Plan1707 = await softDeletePlan(PlanFilter0760, updateBody);
      const Chat_groupFilter9339 = { 'updatedBy': { '$in': user } };
      const Chat_group5179 = await softDeleteChat_group(Chat_groupFilter9339, updateBody);
      const Chat_groupFilter4182 = { 'addedBy': { '$in': user } };
      const Chat_group9264 = await softDeleteChat_group(Chat_groupFilter4182, updateBody);
      const Chat_messageFilter8823 = { 'updatedBy': { '$in': user } };
      const Chat_message5438 = await softDeleteChat_message(Chat_messageFilter8823, updateBody);
      const Chat_messageFilter5729 = { 'addedBy': { '$in': user } };
      const Chat_message2389 = await softDeleteChat_message(Chat_messageFilter5729, updateBody);
      const ToDoFilter4867 = { 'addedBy': { '$in': user } };
      const ToDo2694 = await softDeleteToDo(ToDoFilter4867, updateBody);
      const ToDoFilter2439 = { 'updatedBy': { '$in': user } };
      const ToDo8484 = await softDeleteToDo(ToDoFilter2439, updateBody);
      const Appointment_scheduleFilter2805 = { 'host': { '$in': user } };
      const Appointment_schedule2250 = await softDeleteAppointment_schedule(Appointment_scheduleFilter2805, updateBody);
      const Appointment_scheduleFilter1162 = { 'updatedBy': { '$in': user } };
      const Appointment_schedule2106 = await softDeleteAppointment_schedule(Appointment_scheduleFilter1162, updateBody);
      const Appointment_scheduleFilter2921 = { 'addedBy': { '$in': user } };
      const Appointment_schedule8378 = await softDeleteAppointment_schedule(Appointment_scheduleFilter2921, updateBody);
      const EventFilter4993 = { 'updatedBy': { '$in': user } };
      const Event7986 = await softDeleteEvent(EventFilter4993, updateBody);
      const EventFilter8756 = { 'addedBy': { '$in': user } };
      const Event6975 = await softDeleteEvent(EventFilter8756, updateBody);
      const Appointment_slotFilter2519 = { 'userId': { '$in': user } };
      const Appointment_slot3868 = await softDeleteAppointment_slot(Appointment_slotFilter2519, updateBody);
      const Appointment_slotFilter0856 = { 'updatedBy': { '$in': user } };
      const Appointment_slot5140 = await softDeleteAppointment_slot(Appointment_slotFilter0856, updateBody);
      const Appointment_slotFilter7598 = { 'addedBy': { '$in': user } };
      const Appointment_slot4066 = await softDeleteAppointment_slot(Appointment_slotFilter7598, updateBody);
      const MasterFilter2326 = { 'updatedBy': { '$in': user } };
      const Master0223 = await softDeleteMaster(MasterFilter2326, updateBody);
      const MasterFilter7030 = { 'addedBy': { '$in': user } };
      const Master3458 = await softDeleteMaster(MasterFilter7030, updateBody);
      const BlogFilter7647 = { 'updatedBy': { '$in': user } };
      const Blog3789 = await softDeleteBlog(BlogFilter7647, updateBody);
      const BlogFilter5276 = { 'addedBy': { '$in': user } };
      const Blog1764 = await softDeleteBlog(BlogFilter5276, updateBody);
      const userFilter4339 = { 'addedBy': { '$in': user } };
      const user8736 = await softDeleteUser(userFilter4339, updateBody);
      const userFilter1213 = { 'updatedBy': { '$in': user } };
      const user6317 = await softDeleteUser(userFilter1213, updateBody);
      const userTokensFilter9929 = { 'userId': { '$in': user } };
      const userTokens9687 = await softDeleteUserTokens(userTokensFilter9929, updateBody);
      const userTokensFilter8836 = { 'addedBy': { '$in': user } };
      const userTokens3058 = await softDeleteUserTokens(userTokensFilter8836, updateBody);
      const userTokensFilter5741 = { 'updatedBy': { '$in': user } };
      const userTokens2735 = await softDeleteUserTokens(userTokensFilter5741, updateBody);
      const roleFilter3472 = { 'addedBy': { '$in': user } };
      const role6529 = await softDeleteRole(roleFilter3472, updateBody);
      const roleFilter8631 = { 'updatedBy': { '$in': user } };
      const role3214 = await softDeleteRole(roleFilter8631, updateBody);
      const projectRouteFilter0315 = { 'addedBy': { '$in': user } };
      const projectRoute6786 = await softDeleteProjectRoute(projectRouteFilter0315, updateBody);
      const projectRouteFilter4768 = { 'updatedBy': { '$in': user } };
      const projectRoute3054 = await softDeleteProjectRoute(projectRouteFilter4768, updateBody);
      const routeRoleFilter2575 = { 'addedBy': { '$in': user } };
      const routeRole6773 = await softDeleteRouteRole(routeRoleFilter2575, updateBody);
      const routeRoleFilter7655 = { 'updatedBy': { '$in': user } };
      const routeRole0127 = await softDeleteRouteRole(routeRoleFilter7655, updateBody);
      const userRoleFilter5370 = { 'userId': { '$in': user } };
      const userRole8781 = await softDeleteUserRole(userRoleFilter5370, updateBody);
      const userRoleFilter5362 = { 'addedBy': { '$in': user } };
      const userRole0914 = await softDeleteUserRole(userRoleFilter5362, updateBody);
      const userRoleFilter6627 = { 'updatedBy': { '$in': user } };
      const userRole6602 = await softDeleteUserRole(userRoleFilter6627, updateBody);
      return await User.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No user found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserTokens.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let role = await Role.find(filter, { _id:1 });
    if (role.length){
      role = role.map((obj) => obj._id);
      const routeRoleFilter8621 = { 'roleId': { '$in': role } };
      const routeRole6634 = await softDeleteRouteRole(routeRoleFilter8621, updateBody);
      const userRoleFilter0611 = { 'roleId': { '$in': role } };
      const userRole7565 = await softDeleteUserRole(userRoleFilter0611, updateBody);
      return await Role.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No role found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,updateBody, defaultValues = {}) =>{
  try {
    let projectroute = await ProjectRoute.find(filter, { _id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj._id);
      const routeRoleFilter2490 = { 'routeId': { '$in': projectroute } };
      const routeRole4812 = await softDeleteRouteRole(routeRoleFilter2490, updateBody);
      return await ProjectRoute.updateMany(filter, {
        ...defaultValues,
        ...updateBody
      });
    } else {
      return 'No projectRoute found.';
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await RouteRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,updateBody, defaultValues = {}) =>{
  try {
    return await UserRole.updateMany(filter, {
      ...defaultValues,
      ...updateBody
    });
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deletePatient,
  deleteOrder,
  deleteOrderItem,
  deleteMedication,
  deleteNote,
  deleteEncounter,
  deleteEnterprise,
  deleteDepartments,
  deleteCustomer,
  deleteTask,
  deleteComment,
  deletePlan,
  deleteChat_group,
  deleteChat_message,
  deleteToDo,
  deleteAppointment_schedule,
  deleteEvent,
  deleteAppointment_slot,
  deleteMaster,
  deleteBlog,
  deleteUser,
  deleteUserTokens,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countPatient,
  countOrder,
  countOrderItem,
  countMedication,
  countNote,
  countEncounter,
  countEnterprise,
  countDepartments,
  countCustomer,
  countTask,
  countComment,
  countPlan,
  countChat_group,
  countChat_message,
  countToDo,
  countAppointment_schedule,
  countEvent,
  countAppointment_slot,
  countMaster,
  countBlog,
  countUser,
  countUserTokens,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeletePatient,
  softDeleteOrder,
  softDeleteOrderItem,
  softDeleteMedication,
  softDeleteNote,
  softDeleteEncounter,
  softDeleteEnterprise,
  softDeleteDepartments,
  softDeleteCustomer,
  softDeleteTask,
  softDeleteComment,
  softDeletePlan,
  softDeleteChat_group,
  softDeleteChat_message,
  softDeleteToDo,
  softDeleteAppointment_schedule,
  softDeleteEvent,
  softDeleteAppointment_slot,
  softDeleteMaster,
  softDeleteBlog,
  softDeleteUser,
  softDeleteUserTokens,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
