import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('🔐 Token:', token);
      const res = await axios.get('https://kashiobubbles.onrender.com/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('✅ Users fetched:', res.data);
      setUsers(res.data);
    } catch (error) {
      console.error('❌ Error fetching users:', error);
      toast.error('Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('📡 Fetching users...');
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    console.log('🗑️ Deleting user with ID:', id);
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://kashiobubbles.onrender.com/api/admin/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('✅ User deleted:', id);
      toast.success('User deleted');
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      console.error('❌ Error deleting user:', error);
      toast.error('Failed to delete user.');
    }
  };

  const handleEdit = (user) => {
    console.log('✏️ Editing user:', user);
    setEditingId(user.id);
    setForm({ name: user.name, email: user.email, password: '' });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log('📤 Updating user:', editingId, form);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `https://kashiobubbles.onrender.com/api/admin/users/${editingId}`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('✅ Update response:', response.data);
      toast.success('User updated');
      setEditingId(null);
      fetchUsers();
    } catch (error) {
      console.error('❌ Error updating user:', error);
      toast.error('Failed to update user.');
    }
  };

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-4 py-24">
      <ToastContainer />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#c5a880] text-center mb-8">Manage Users</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-400">No users found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-[#c5a880]/20 shadow-md">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#2a2a2a] text-[#c5a880]">
                <tr>
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Created</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5a880]/10 bg-[#1a1a1a] text-white">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-[#2a2a2a]/60">
                    <td className="py-3 px-4">{user.id}</td>
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4">
                      {new Date(user.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <button
                        onClick={() => handleEdit(user)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {editingId && (
          <form
            onSubmit={handleUpdate}
            className="bg-[#2a2a2a] mt-10 p-6 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <h3 className="text-xl font-semibold text-[#c5a880] mb-4 text-center">
              Update User
            </h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-3 rounded bg-[#1a1a1a] border border-[#c5a880] text-white"
              value={form.name}
              onChange={(e) => {
                console.log('📝 Name changed:', e.target.value);
                setForm({ ...form, name: e.target.value });
              }}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-3 rounded bg-[#1a1a1a] border border-[#c5a880] text-white"
              value={form.email}
              onChange={(e) => {
                console.log('📧 Email changed:', e.target.value);
                setForm({ ...form, email: e.target.value });
              }}
              required
            />
            <input
              type="password"
              placeholder="New Password (optional)"
              className="w-full p-2 mb-3 rounded bg-[#1a1a1a] border border-[#c5a880] text-white"
              value={form.password}
              onChange={(e) => {
                console.log('🔒 Password changed');
                setForm({ ...form, password: e.target.value });
              }}
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  console.log('❌ Cancel editing');
                  setEditingId(null);
                }}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default ManageUsers;
